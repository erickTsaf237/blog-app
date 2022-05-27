import { Test, TestingModule } from '@nestjs/testing';
import { VisibilitiesController } from './visibilities.controller';

describe('VisibilitiesController', () => {
  let controller: VisibilitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisibilitiesController],
    }).compile();

    controller = module.get<VisibilitiesController>(VisibilitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
