import { Module } from '@nestjs/common';
import { WorkOnsController } from './work_ons.controller';
import { WorkOnsService } from './work_ons.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Work_on } from './model/work_ons';

@Module({
  imports:[SequelizeModule.forFeature([Work_on])],
  controllers: [WorkOnsController],
  exports:[WorkOnsService],
  providers: [WorkOnsService]
})
export class WorkOnsModule {

}
