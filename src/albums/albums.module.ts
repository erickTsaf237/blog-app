import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Album } from './model/albums.model';

@Module({
  imports: [SequelizeModule.forFeature([Album])],
  controllers: [AlbumsController],
  exports: [AlbumsService],
  providers: [AlbumsService]
})
export class AlbumsModule {}
