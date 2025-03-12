import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ClickerService } from './clicker.service';
import { CreateClickerDto } from './dto/create-clicker.dto';
import { UpdateClickerDto } from './dto/update-clicker.dto';

@Controller('clicker')
export class ClickerController {
  constructor(private readonly clickerService: ClickerService) {}

  @Post()
  create(@Body() createClickerDto: CreateClickerDto) {
    return this.clickerService.create(createClickerDto);
  }

  @Put('/increment-score/:id')
  incrementScore(@Param('id') id: string ) {
    return this.clickerService.incrementScore(+id);
  }

  @Put('/increment-autoclick/:id')
  incrementAutoclick(@Param('id') id : string, @Body() updateClickerDto: UpdateClickerDto) {
    return this.clickerService.incrementAutoclick(+id, updateClickerDto);
  }

  @Get()
  findAll() {
    return this.clickerService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clickerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClickerDto: UpdateClickerDto) {
    return this.clickerService.update(+id, updateClickerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clickerService.remove(+id);
  }
}
