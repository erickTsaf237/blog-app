import { Controller, Put, Param, Post, Delete, Body, Get,  } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { Album } from './model/albums.model';

@Controller('albums')
export class AlbumsController {
  constructor( private  readonly albumsSevice:AlbumsService) {
  }

  @Get(':id')
  findOneAlbum(@Param('id') id: string){
    return this.albumsSevice.findOneAlbum(id)
  }

  @Get()
  findAllAlbum(){
    return this.albumsSevice.findAllAlbum()
  }

  @Post()
  createAlbum(@Body() newAlbum: Album){
    return this.albumsSevice.createAlbum(newAlbum)
  }

  @Put()
  updateAlbum(@Body() updatedAlbum: Album){
    return this.albumsSevice.updateAlbum(updatedAlbum)
  }

  @Delete(':id')
  deleteAlbum(@Param('id') id: string){
    return this.albumsSevice.deleteAlbum(id)
  }

}
