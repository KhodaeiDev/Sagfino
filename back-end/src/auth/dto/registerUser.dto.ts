import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import userRoleEnum from 'src/users/enum/userRoleEnum';

export class RegisterUserDto {
  @IsString()
  @MinLength(3, { message: 'نام باید حداقل دارای 3 کاراکتر باشد' })
  @IsNotEmpty({ message: 'نام الزامی می باشد' })
  firstName: string;

  @IsString()
  @MinLength(3, { message: 'نام خانوادگی باید حداقل دارای 3 کاراکتر باشد' })
  @IsNotEmpty({ message: 'نام خانوادگی الزامی می باشد' })
  lastName: string;

  @IsString()
  @MinLength(8, { message: 'رمز عبور باید حداقل دارای 8 کاراکتر باشد' })
  password: string;

  @IsEnum(userRoleEnum)
  @IsOptional()
  role: userRoleEnum;
}
