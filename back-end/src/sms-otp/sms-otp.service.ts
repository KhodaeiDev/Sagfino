import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { SendOtpDto } from './dto/sendOtp.dto';
import { UpdateSmsOtpDto } from './dto/update-sms-otp.dto';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class SmsOtpService {
  private readonly apiUrl = 'http://ippanel.com/api/select';
  private readonly user = process.env.OTP_USER;
  private readonly pass = process.env.OTP_PASS;
  private readonly fromNum = process.env.OTP_FROM_NUM;
  private readonly patternCode = process.env.OTP_PATTERN_CODE;

  constructor(private readonly redisService: RedisService) {}

  async sendOtp(sendOtpDto: SendOtpDto, code: string) {
    try {
      const response = await axios.post(this.apiUrl, {
        op: 'pattern',
        user: this.user,
        pass: this.pass,
        fromNum: this.fromNum,
        toNum: sendOtpDto.phone,
        patternCode: this.patternCode,
        inputData: [{ 'verification-code': +code }],
      });

      const expireTime = 120;
      await this.redisService.set(sendOtpDto.phone, code, expireTime);

      return response.data;
    } catch (error) {
      console.error('SMS Error:', error.response?.data || error.message);
      throw new BadRequestException('خطا در ارسال پیامک');
    }
  }

  async verifyOtp(phone: string, code: string): Promise<boolean> {
    const storedCode = await this.redisService.get(phone);
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
