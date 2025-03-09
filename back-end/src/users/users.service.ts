import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import userRoleEnum from './enum/userRoleEnum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto, phone: string) {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const usersCount = await this.userRepository.count();

      const newUser = this.userRepository.create({
        ...createUserDto,
        phone,
        password: hashedPassword,
        role: usersCount === 0 ? userRoleEnum.Admin : createUserDto.role,
      });

      await this.userRepository.save(newUser);

      return newUser;
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
