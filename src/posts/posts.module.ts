import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import sequelize from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Poste } from './model/posts.model';

@Module({
  imports:[SequelizeModule.forFeature([Poste])],
  controllers: [PostsController],
  exports: [PostsService],
  providers: [PostsService]
})
export class PostsModule {}
