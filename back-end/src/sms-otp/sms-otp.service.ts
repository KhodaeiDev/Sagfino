import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateSmsOtpDto } from './dto/create-sms-otp.dto';
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

  async sendOtp(phone: string, code: string) {
    try {
      const response = await axios.post(this.apiUrl, {
        op: 'pattern',
        user: this.user,
        pass: this.pass,
        fromNum: this.fromNum,
        toNum: phone,
        patternCode: this.patternCode,
        inputData: [{ code }],
      });

      const expireTime = 120;
      await this.client.setex(phone, expireTime, code);

      return response.data;
    } catch (error) {
      console.error('SMS Error:', error.response?.data || error.message);
      throw new BadRequestException('خطا در ارسال پیامک');
    }
  }

  create(createSmsOtpDto: CreateSmsOtpDto) {
    return 'This action adds a new smsOtp';
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
