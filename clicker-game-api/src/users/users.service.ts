import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where : {id}});
  }

  async incrementScore(id: number, updataUserDto) {
    const userStats = await this.findOne(+id);
    const score = userStats.score;
    const res = score + updataUserDto.boost;
    const scoreIncremented = Object.assign(userStats, { score: res });
    return await this.userRepository.save(scoreIncremented);
  }

  async decrementScore(id: number, updateUserDto: UpdateUserDto) {
    const userStats = await this.findOne(+id);
    const score = userStats.score;
    const res = score - updateUserDto.remove;
    const scoreDecremented = Object.assign(userStats, { score: res });
    return await this.userRepository.save(scoreDecremented);
  }

  async incrementAutoclick(id: number, updataUserDto: UpdateUserDto) {
    const userStats = await this.findOne(+id);
    const autoClick = userStats.auto_clicker;
    const res = autoClick + updataUserDto.boost;
    const autoClickIncremented = Object.assign(userStats, { auto_clicker: res });
    return await this.userRepository.save(autoClickIncremented);
  }

  async incrementClick(id: number, updataUserDto: UpdateUserDto) {
    const userStats = await this.findOne(+id);
    const nb_click = userStats.nb_per_click;
    const res = nb_click + updataUserDto.boost;
    const clickIncremented = Object.assign(userStats, { nb_per_click : res })
    return await this.userRepository.save(clickIncremented);
  }

  async remove(id: number) {
    const to_del = await this.findOne(id);
    if ( to_del ) {
      return this.userRepository.remove(to_del);
    }
  }
}
