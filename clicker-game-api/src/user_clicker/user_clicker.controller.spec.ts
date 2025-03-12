import { Test, TestingModule } from '@nestjs/testing';
import { UserClickerController } from './user_clicker.controller';
import { UserClickerService } from './user_clicker.service';

describe('UserClickerController', () => {
  let controller: UserClickerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserClickerController],
      providers: [UserClickerService],
    }).compile();

    controller = module.get<UserClickerController>(UserClickerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
