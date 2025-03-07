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
// import { SendOtpDto } from './dto/sendOtp.dto';
import { Response } from 'express';
import { VerifySmsOtpDto } from 'src/sms-otp/dto/verify-sms-otp.dto';
import { SendOtpDto } from 'src/sms-otp/dto/sendOtp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send-otp')
  async create(@Res() res: Response, @Body() sendOtpDto: SendOtpDto) {
    const data = await this.authService.sendOtp(sendOtpDto);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: `کد تایید به شماره تلفن ${sendOtpDto.phone} ارسال شد.`,
    });
  }

  @Post('verify-otp')
  async verifyOtp(@Res() res: Response, @Body() verifySmsDto: VerifySmsOtpDto) {
    const data = await this.authService.verifyOtp(verifySmsDto);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'تایید شد',
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
