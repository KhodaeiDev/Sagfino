import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class SendOtpDto {
  @IsString()
  @Length(11, 11, { message: 'شماره تلفن باید 11 رقم باشد.' })
  @Matches(/^09\d{9}$/, {
    message: 'لطفا شماره تلفن را در فرمت صحیح وارد کنید.',
  })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'شماره موبایل الزامی می باشد' })
  phone: string;
}
