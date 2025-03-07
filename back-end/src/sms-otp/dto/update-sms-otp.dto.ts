import { PartialType } from '@nestjs/mapped-types';
import { CreateSmsOtpDto } from './create-sms-otp.dto';

export class UpdateSmsOtpDto extends PartialType(CreateSmsOtpDto) {}
