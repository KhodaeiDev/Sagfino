import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { SmsOtpService } from 'src/sms-otp/sms-otp.service';
import { SmsOtpModule } from 'src/sms-otp/sms-otp.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SmsOtpModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
