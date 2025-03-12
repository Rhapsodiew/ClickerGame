import { Test, TestingModule } from '@nestjs/testing';
import { ClickerController } from './clicker.controller';
import { ClickerService } from './clicker.service';

describe('ClickerController', () => {
  let controller: ClickerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClickerController],
      providers: [ClickerService],
    }).compile();

    controller = module.get<ClickerController>(ClickerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
