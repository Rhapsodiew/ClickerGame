import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put("decrement-score/:id")
  decrementScore(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.decrementScore(+id, updateUserDto);
  }

  @Put("/increment-score/:id")
  incrementScore(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.incrementScore(+id, updateUserDto);
  }

  @Put("/increment-autoclick/:id")
  incrementAutoClick(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.incrementAutoclick(+id, updateUserDto);
  }

  @Put("increment-click/:id")
  incrementClick(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.incrementClick(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
