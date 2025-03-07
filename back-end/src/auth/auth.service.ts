import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SmsOtpService } from 'src/sms-otp/sms-otp.service';
import jwt from 'JsonWebToken';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly smsService: SmsOtpService,
    private readonly userService: UsersService,
  ) {}

  generateAuthToken(user: any) {
    const payload = { phone: user.phone, id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return token;
  }

  async sendOtp(phone: string) {
    const code: string = Math.floor(10000 + Math.random() * 90000).toString();
    await this.smsService.sendOtp(phone, code);
    return 'کد تأیید ارسال شد';
  }

  async verifyOtp(phone: string, code: string) {
    const isValid = await this.smsService.verifyOtp(phone, code);
    if (!isValid) {
      throw new UnauthorizedException('کد تایید نادرست است');
    }

    const existUser = await this.userService.findOne(phone);
    if (existUser) {
      const accessToken = this.generateAuthToken(existUser);
      return { message: 'با موفقیت وارد شدید', accessToken };
    }

    const phoneToken = jwt.sign({ phone }, process.env.JWT_SECRET, {
      expiresIn: process.env.PHONE_JWT_EXPIRE,
    });
    return {
      message: 'تایید شد',
      phoneToken,
    };
  }

  create(createAuthDto: CreateAuthDto) {
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
