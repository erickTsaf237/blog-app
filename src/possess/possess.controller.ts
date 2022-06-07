import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PossessService } from './possess.service';
import { Possess } from './model/possess.model';

@Controller('possess')
export class PossessController {
  constructor(private  readonly possessService: PossessService) {}

  @Post()
  createPossess(@Body() newPossess: Possess){
    return this.possessService.createPossess(newPossess)
  }

  @Put()
  updatePossess(@Body() updatedPossess: Possess){
    return this.possessService.updatePossess(updatedPossess)
  }
  @Get('album/:id')
  findAllPossessByAlbumID(@Param('id') id: string){
    console.log(`\n\nje ne vous dis pas ${id}\n\n`)
    return this.possessService.findAllPossess(id)
  }

  @Get()
  findAllPossess(){
    return this.possessService.findAllPossess()
  }


  @Get(':id')
  findOnePossess(@Param('id') id: string){
    return this.possessService.findOnePossess(id)
  }
  @Delete(':id')
  deletePossess(@Param('id') id: string){
    return this.possessService.deletePossess(id)
  }



}
