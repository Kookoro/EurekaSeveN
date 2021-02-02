import { Test, TestingModule } from '@nestjs/testing';
import { UserCountController } from './qltest.controller';

describe('Test Controller', () => {
  let controller: UserCountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCountController],
    }).compile();

    controller = module.get<UserCountController>(UserCountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
