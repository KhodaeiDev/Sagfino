import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SmsOtpModule } from './sms-otp/sms-otp.module';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';
import { CategoryModule } from './category/category.module';
import { UploaderModule } from './uploader/uploader.module';
import { AgencyModule } from './agency/agency.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      synchronize: true,
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    }),
    UsersModule,
    SmsOtpModule,
    AuthModule,
    RedisModule,
    CategoryModule,
    UploaderModule,
    AgencyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
