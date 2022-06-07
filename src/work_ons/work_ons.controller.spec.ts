import { Test, TestingModule } from '@nestjs/testing';
import { WorkOnsController } from './work_ons.controller';

describe('WorkOnsController', () => {
  let controller: WorkOnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkOnsController],
    }).compile();

    controller = module.get<WorkOnsController>(WorkOnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
