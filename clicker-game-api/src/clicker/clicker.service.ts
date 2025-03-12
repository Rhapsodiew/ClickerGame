import { Injectable } from '@nestjs/common';
import { CreateClickerDto } from './dto/create-clicker.dto';
import { UpdateClickerDto } from './dto/update-clicker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Clicker } from './entities/clicker.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClickerService {
  constructor(
    @InjectRepository(Clicker)
    private clickerRepository: Repository<Clicker>,
  ) {}

  async create(createClickerDto: CreateClickerDto) {
    return await this.clickerRepository.save(createClickerDto)
  }

  async incrementScore(id: number) {
    const scoreToIncrement = await this.findOne(+id);
    const clicker_boost = scoreToIncrement.boost_clicker;
    const score = scoreToIncrement.score;
    const res = score + (1 * clicker_boost);
    const scoreIncremented = Object.assign(scoreToIncrement, { score: res });
    return await this.clickerRepository.save(scoreIncremented);
  }

  async incrementAutoclick(id: number, updateClickerDto: UpdateClickerDto) {
    const autoClickToIncrement = await this.findOne(+id);
    const autoClick = autoClickToIncrement.boost_clicker;
    const res = autoClick + updateClickerDto.boost_clicker;
    const autoClickIncremented = Object.assign(autoClickToIncrement, { boost_clicker: res });
    return await this.clickerRepository.save(autoClickIncremented);
  }

  findAll() {
    return this.clickerRepository.find();
  }

  findOne(id: number) {
    return this.clickerRepository.findOne({ where: { id } });
  }

  update(id: number, updateClickerDto: UpdateClickerDto) {
    return `This action updates a #${id} clicker`;
  }

  remove(id: number) {
    return `This action removes a #${id} clicker`;
  }
}
