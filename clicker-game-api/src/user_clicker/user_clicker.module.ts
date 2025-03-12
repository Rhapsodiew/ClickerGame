import { Module } from '@nestjs/common';
import { UserClickerService } from './user_clicker.service';
import { UserClickerController } from './user_clicker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClicker } from './entities/user_clicker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserClicker])],
  controllers: [UserClickerController],
  providers: [UserClickerService],
  exports: [UserClickerService]
})
export class UserClickerModule {}
