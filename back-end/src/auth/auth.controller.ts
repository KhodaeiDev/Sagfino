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
import { Response } from 'express';
import { VerifySmsOtpDto } from 'src/sms-otp/dto/verify-sms-otp.dto';
import { SendOtpDto } from 'src/sms-otp/dto/sendOtp.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

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
      data,
    });
  }

  @Post('register/:phoneToken')
  async createUser(
    @Res() res: Response,
    @Body() createUserDto: CreateUserDto,
    @Param('phoneToken') phoneToken: string,
  ) {
    const data = await this.authService.registerUser(createUserDto, phoneToken);

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data,
    });
  }
}
