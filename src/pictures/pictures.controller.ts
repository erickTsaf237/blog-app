import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { Picture } from './model/pictures.model';

@Controller('pictures')
export class PicturesController {

  constructor(private readonly picturesService: PicturesService){}

  @Get()
  getAllPictures(){
    return this.picturesService.getAllPictures()
  }
  @Get(':id')
  getOnePicture(@Param('id') id: string){
    return this.picturesService.getOnePicture(id)
  }

  @Put()
  updatePicture(@Body() updatePicture: Picture){
    return this.picturesService.updatePicture(updatePicture)
  }

  @Post()
  createPicture(@Body() newPicture:Picture){
    return this.picturesService.createPicture(newPicture)
  }

  @Delete('id')
  deletePicture(@Param('id') id: string){
    return this.picturesService.deletePicture(id)

  }

}
