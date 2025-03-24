import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SendOtpDto } from './dto/sendOtp.dto';
import { SmsOtpService } from 'src/sms-otp/sms-otp.service';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';
import { VerifySmsOtpDto } from 'src/sms-otp/dto/verify-sms-otp.dto';
import { RegisterUserDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcryptjs';
import userRoleEnum from 'src/users/enum/userRoleEnum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly smsService: SmsOtpService,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  generateAuthToken(user: any) {
    const payload = { id: user.id, phone: user.phone, role: user.role };
    const token = this.jwtService.sign(payload);
    return token;
  }

  async sendOtp(sendOtpDto: SendOtpDto): Promise<void> {
    const code: string = Math.floor(10000 + Math.random() * 90000).toString();
    await this.smsService.sendOtp(sendOtpDto, code);
  }

  async verifyOtp(verifySmsDto: VerifySmsOtpDto) {
    const phone: string = verifySmsDto.phone;

    const isValid = await this.smsService.verifyOtp(verifySmsDto);
    if (!isValid) {
      throw new UnauthorizedException('کد تایید نادرست و یا منقضی شده است');
    }

    const existUser = await this.userService.findOne(phone);
    if (existUser) {
      delete existUser.password;
      const accessToken = this.generateAuthToken(existUser);
      return { message: 'با موفقیت وارد شدید', user: existUser, accessToken };
    }

    const phoneToken = jwt.sign({ phone }, process.env.JWT_SECRET, {
      expiresIn: process.env.PHONE_JWT_EXPIRE,
    });
    return { message: 'تایید شد', phoneToken };
  }

  async registerUser(registerUserDto: RegisterUserDto, phoneToken: string) {
    const decodedPhone = await this.jwtService.verify(phoneToken);

    // jwt.verify(phoneToken, process.env.JWT_SECRET) as jwt.JwtPayload;

    const phone: string = decodedPhone.phone;

    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);
    const usersCount = (await this.userService.findAll()).length;

    console.log(usersCount);

    const user = await this.userService.create({
      ...registerUserDto,
      phone,
      password: hashedPassword,
      role: usersCount === 0 ? userRoleEnum.Admin : registerUserDto.role,
      avatar: null,
    });

    const accessToken = this.generateAuthToken(user);
    return accessToken;
  }
}
