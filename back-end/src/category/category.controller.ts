import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Response } from 'express';
import { UploaderService } from 'src/uploader/uploader.service';
import { Express } from 'express';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseInterceptors(new UploaderService().uploadInterceptor('categories'))
  async create(
    @UploadedFile() image: Express.Multer.File,
    @Res() res: Response,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    if (createCategoryDto.categoryType === 'sub') {
      if (!image)
        throw new BadRequestException('لطفا تصویر دسته بندی را نیز وارد کنید');
    }
    const imagePath = image?.filename ? `/categories/${image?.filename}` : null;
    createCategoryDto.image = imagePath;

    const data = await this.categoryService.create(createCategoryDto);

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data,
    });
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
