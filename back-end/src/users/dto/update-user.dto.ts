import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail({}, { message: 'لطفا ایمیل را در فرمت صحیح وارد کنید.' })
  @IsOptional()
  email: string;
}
