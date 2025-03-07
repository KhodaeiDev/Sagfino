import { PartialType } from '@nestjs/mapped-types';
import { SendOtpDto } from './sendOtp.dto';

export class UpdateAuthDto extends PartialType(SendOtpDto) {}
