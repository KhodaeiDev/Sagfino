import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SendOtpDto } from './dto/sendOtp.dto';
import { UpdateAuthDto } from './dto/updateAuth.dto';
import { SmsOtpService } from 'src/sms-otp/sms-otp.service';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';
import { VerifySmsOtpDto } from 'src/sms-otp/dto/verify-sms-otp.dto';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly smsService: SmsOtpService,
    private readonly userService: UsersService,
  ) {}

  generateAuthToken(user: any) {
    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
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

  async registerUser(createUserDto: CreateUserDto, phoneToken: string) {
    const decodedPhone = jwt.verify(
      phoneToken,
      process.env.JWT_SECRET,
    ) as jwt.JwtPayload;

    const phone: string = decodedPhone.phone;
    const user = await this.userService.create(createUserDto, phone);
    delete user.password;

    const accessToken = this.generateAuthToken(user);

    return {
      message: 'ثبت نام با موفقیت انجام شد',
      user,
      accessToken,
    };
  }

  create(createAuthDto: SendOtpDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
