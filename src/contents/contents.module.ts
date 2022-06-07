import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Content } from './model/contents.model';

@Module({
  imports:[SequelizeModule.forFeature([Content])],
  controllers: [ContentsController],
  exports:[ContentsService],
  providers: [ContentsService]
})
export class ContentsModule {}
