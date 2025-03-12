import { Test, TestingModule } from '@nestjs/testing';
import { UserClickerService } from './user_clicker.service';

describe('UserClickerService', () => {
  let service: UserClickerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserClickerService],
    }).compile();

    service = module.get<UserClickerService>(UserClickerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
