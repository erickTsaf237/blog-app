import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Poste } from './model/posts.model';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  @Get()
  findAllposts(){
    return this.postsService.findAllPosts()
  }

  @Get(':id')
  findOnePosts(@Param('id') id: string){
    return this.postsService.findOnePost(id)
  }


  @Post()
  createPost(@Body() newPost: Poste){
    return this.postsService.createPost(newPost)
  }

  @Put()
  updatePost(@Body()updatedPost: Poste){
    return this.postsService.updatePoste(updatedPost)
  }

  @Delete(':id')
  deletePost(@Param('id')id: string){
    return this.postsService.deletePost(id)
  }
}
