import { PartialType } from '@nestjs/mapped-types';
import { SendOtpDto } from './sendOtp.dto';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifySmsOtpDto extends SendOtpDto {
  @IsString()
  @IsNotEmpty({ message: 'کد تایید نمی‌تواند خالی باشد' })
  @Length(5, 5, { message: 'کد تایید باید 5 رقم باشد' })
  code: string;
}
