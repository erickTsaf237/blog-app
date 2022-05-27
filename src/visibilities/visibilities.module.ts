import { Module } from '@nestjs/common';
import { VisibilitiesController } from './visibilities.controller';
import { VisibilitiesService } from './visibilities.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Visibility } from './model/visibilities.model';

@Module({
  imports: [SequelizeModule.forFeature([Visibility])],
  controllers: [VisibilitiesController],
  exports: [VisibilitiesService],
  providers: [VisibilitiesService]
})
export class VisibilitiesModule {}
