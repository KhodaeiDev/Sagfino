import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import userRoleEnum from './enum/userRoleEnum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.userRepository.create(createUserDto);

      await this.userRepository.save(newUser);

      delete newUser.password;

      return { user: newUser };
    } catch (err) {
      console.log(err);
      throw new BadRequestException('خطا در ایجاد کاربر');
    }
  }

  async findOne(phone: string) {
    const user = await this.userRepository.findOne({ where: { phone } });
    if (!user) {
      return false;
    }

    return user;
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('کاربر یافت نشد');
      }

      const updatedUser = await this.userRepository.save({
        ...user,
        ...updateUserDto,
      });

      return { message: 'اطلاعات شما آپدیت شد', user: updatedUser };
    } catch (error) {
      throw new BadRequestException('هنگام آپدیت اطلاعات خطایی رخ داده است');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
