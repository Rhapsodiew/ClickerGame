import { Injectable } from '@nestjs/common';
import { CreateUserClickerDto } from './dto/create-user_clicker.dto';
import { UpdateUserClickerDto } from './dto/update-user_clicker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserClicker } from './entities/user_clicker.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserClickerService {

  constructor(
    @InjectRepository(UserClicker)
    private userClickerRepository: Repository<UserClicker>,
  ) {}
  
  async create(createUserClickerDto: CreateUserClickerDto) {
    return await this.userClickerRepository.save(createUserClickerDto);
  }

  async findAll() {
    return await this.userClickerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} userClicker`;
  }

  update(id: number, updateUserClickerDto: UpdateUserClickerDto) {
    return `This action updates a #${id} userClicker`;
  }

  remove(id: number) {
    return `This action removes a #${id} userClicker`;
  }
}
