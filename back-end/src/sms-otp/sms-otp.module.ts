import { Module } from '@nestjs/common';
import { SmsOtpService } from './sms-otp.service';
import { SmsOtpController } from './sms-otp.controller';

@Module({
  controllers: [SmsOtpController],
  providers: [SmsOtpService],
  exports: [SmsOtpService],
})
export class SmsOtpModule {}
