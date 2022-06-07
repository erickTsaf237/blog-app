import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorkOnsService } from './work_ons.service';
import { Work_on } from './model/work_ons';

@Controller('work-ons')
export class WorkOnsController {
  constructor(private readonly workOnService: WorkOnsService) {
  }

  @Post()
  createWork_on(@Body() newWork_on: Work_on){
    return this.workOnService.createWork_on(newWork_on)
  }

  @Put()
  updateWork_on(@Body() updatedWork_on: Work_on){
    return this.workOnService.updateWork_on(updatedWork_on)
  }

  @Get()
  findAllWork_ons(){
    return this.workOnService.findAllWork_ons()
  }

  @Get(':id')
  findOneWork_on(@Param('id') id: string){
    return this.workOnService.findOneWork_on(id)
  }
  @Delete(':id')
  deleteWork_on(@Param('id') id: string){
    return this.workOnService.deleteWork_on(id)
  }

}
