import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserClickerService } from './user_clicker.service';
import { CreateUserClickerDto } from './dto/create-user_clicker.dto';
import { UpdateUserClickerDto } from './dto/update-user_clicker.dto';

@Controller('user-clicker')
export class UserClickerController {
  constructor(private readonly userClickerService: UserClickerService) {}

  @Post()
  create(@Body() createUserClickerDto: CreateUserClickerDto) {
    return this.userClickerService.create(createUserClickerDto);
  }

  @Get()
  findAll() {
    return this.userClickerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userClickerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserClickerDto: UpdateUserClickerDto) {
    return this.userClickerService.update(+id, updateUserClickerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userClickerService.remove(+id);
  }
}
