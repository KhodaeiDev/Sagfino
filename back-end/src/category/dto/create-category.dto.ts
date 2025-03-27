import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CategoryType } from '../enums/categoryTypeEnum';

export class CreateCategoryDto {
  @IsString({ message: 'نام دسته بندی باید یک رشته باشد' })
  @IsNotEmpty({ message: 'لطفا نام دسته بندی را وارد کنید' })
  title: string;

  @IsEnum(CategoryType, {
    message: 'نوع دسته بندی باید یکی از مقادیر main , sub باشد',
  })
  categoryType: CategoryType;
}
