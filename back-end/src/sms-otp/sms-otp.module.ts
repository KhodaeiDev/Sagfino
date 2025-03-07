import { Module } from '@nestjs/common';
import { SmsOtpService } from './sms-otp.service';
import { SmsOtpController } from './sms-otp.controller';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [SmsOtpController],
  providers: [SmsOtpService],
  exports: [SmsOtpService],
})
export class SmsOtpModule {}
