import { Module } from '@nestjs/common';
import { PicturesController } from './pictures.controller';
import { PicturesService } from './pictures.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/model/users.model';
import { Picture } from './model/pictures.model';

@Module({
  imports: [SequelizeModule.forFeature([Picture])],
  controllers: [PicturesController],
  exports: [PicturesService],
  providers: [PicturesService],

})
export class PicturesModule {}
