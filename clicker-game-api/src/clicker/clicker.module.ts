import { Module } from '@nestjs/common';
import { ClickerService } from './clicker.service';
import { ClickerController } from './clicker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clicker } from './entities/clicker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clicker])],
  controllers: [ClickerController],
  providers: [ClickerService],
  exports: [ClickerService]
})
export class ClickerModule {}
