import { PartialType } from '@nestjs/mapped-types';
import { SendOtpDto } from './sendOtp.dto';

export class UpdateSmsOtpDto extends PartialType(SendOtpDto) {}
