import { Controller, Get, Post, Put, Param, Body, Delete,  } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {

  constructor(private readonly commentsService: CommentsService) {
  }

  @Get()
  findAllComment(){
    return this.commentsService.findAllComments();
  }

  @Get(':id')
  findOneComment(@Param('id') id: string){

    return this.commentsService.findOneComment(id)
  }

  @Post()
  createComment(@Body() newComment: Comment){
    return this.commentsService.createComment(newComment)
  }

  @Put()
  updateComment(@Body() updatedComment: Comment){
    return this.commentsService.updateComment(updatedComment)
  }

  @Delete(':id')
  deleteComment(@Param('id')id: string){
    return this.commentsService.deleteComment(id)
  }
}
