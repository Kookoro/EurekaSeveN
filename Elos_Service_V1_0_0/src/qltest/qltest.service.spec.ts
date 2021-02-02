import { Test, TestingModule } from '@nestjs/testing';
import { UserCountService } from './qltest.service';

describe('UserService', () => {
  let service: UserCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCountService],
    }).compile();

    service = module.get<UserCountService>(UserCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
