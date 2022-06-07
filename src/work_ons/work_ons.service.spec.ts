import { Test, TestingModule } from '@nestjs/testing';
import { WorkOnsService } from './work_ons.service';

describe('WorkOnsService', () => {
  let service: WorkOnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkOnsService],
    }).compile();

    service = module.get<WorkOnsService>(WorkOnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
