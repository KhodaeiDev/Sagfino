import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SendOtpDto } from './dto/sendOtp.dto';
import { UpdateAuthDto } from './dto/updateAuth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send-otp')
  async create(@Res() res: Response, @Body() sendOtpDto: SendOtpDto) {
    const data = await this.authService.sendOtp(sendOtpDto);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: `کد تایید به شماره تلفن ${sendOtpDto.phone} ارسال شد.`,
      data,
    });
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
