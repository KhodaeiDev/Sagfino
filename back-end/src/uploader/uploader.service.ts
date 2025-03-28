import { BadRequestException, Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import * as fs from 'fs';
import { FileInterceptor } from '@nestjs/platform-express';

@Injectable()
export class UploaderService {
  getMulterConfig(destination: string) {
    return {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = join(
            process.cwd(),
            'public',
            'uploads',
            destination,
          );

          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
          }

          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
      fileFilter: (req, file, cb) => {
        const allowedFormats = [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/webp',
        ];

        if (!allowedFormats.includes(file.mimetype)) {
          return cb(
            new BadRequestException(
              'فقط فرمت های  JPEG, JPG, PNG, و WEBP مورد قبول هستند',
            ),
            false,
          );
        }
        cb(null, true);
      },
    };
  }

  uploadInterceptor(destination: string) {
    return FileInterceptor('file', this.getMulterConfig(destination));
  }
}
