import { Test, TestingModule } from '@nestjs/testing';
import { PossessController } from './possess.controller';

describe('PossessController', () => {
  let controller: PossessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PossessController],
    }).compile();

    controller = module.get<PossessController>(PossessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
