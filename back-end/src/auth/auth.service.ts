import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SmsOtpService } from 'src/sms-otp/sms-otp.service';

@Injectable()
export class AuthService {
  constructor(private readonly smsService: SmsOtpService) {}

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
    return 'تایید شد';
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
