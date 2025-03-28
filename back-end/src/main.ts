import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as path from 'path';
import * as serveStatic from 'serve-static';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    '/images',
    serveStatic(path.join(process.cwd(), 'public', 'uploads')),
  );

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
