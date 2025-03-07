import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { SendOtpDto } from './dto/sendOtp.dto';
import { UpdateSmsOtpDto } from './dto/update-sms-otp.dto';
import * as redis from 'redis';

@Injectable()
export class SmsOtpService {
  private client;

  private readonly apiUrl = 'http://ippanel.com/api/select';
  private readonly user = process.env.OTP_USER;
  private readonly pass = process.env.OTP_PASS;
  private readonly fromNum = process.env.OTP_FROM_NUM;
  private readonly patternCode = process.env.OTP_PATTERN_CODE;

  constructor() {
    this.client = redis.createClient();
  }

  async sendOtp(phone: SendOtpDto, code: string) {
    try {
      console.log(phone.phone);
      console.log(code);

      const response = await axios.post(this.apiUrl, {
        op: 'pattern',
        user: this.user,
        pass: this.pass,
        fromNum: this.fromNum,
        toNum: phone.phone,
        patternCode: this.patternCode,
        inputData: [{ 'verification-code': +code }],
      });

      const expireTime = 120;
      await this.client.set(phone.phone, code, 'EX', expireTime);

      console.log(response.data);

      return response.data; // کد برای فلان شماره تلفن ارسال شد
    } catch (error) {
      console.error('SMS Error:', error.response?.data || error.message);
      throw new BadRequestException('خطا در ارسال پیامک');
    }
  }

  async verifyOtp(phone: string, code: string): Promise<boolean> {
    const storedCode = await this.client.get(phone);
    if (storedCode === code) {
      return true;
    }
    return false;
  }

  findAll() {
    return `This action returns all smsOtp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smsOtp`;
  }

  update(id: number, updateSmsOtpDto: UpdateSmsOtpDto) {
    return `This action updates a #${id} smsOtp`;
  }

  remove(id: number) {
    return `This action removes a #${id} smsOtp`;
  }
}
