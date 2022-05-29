import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([Comment])],
  controllers: [CommentsController],
  exports:[CommentsService],
  providers: [CommentsService]

})
export class CommentsModule {}
