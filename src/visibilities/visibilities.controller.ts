import { Controller, Get, Put, Delete, Post, Param, Body } from '@nestjs/common';
import { VisibilitiesService } from './visibilities.service';
import { Visibility } from './model/visibilities.model';

@Controller('visibilities')
export class VisibilitiesController {

  constructor(private readonly visibilityService: VisibilitiesService){}

  @Get(':id')
  findOneVisibities(@Param('id') id: string){
    return this.visibilityService.findOneVisibity(id)
  }

  @Post()
  createVisibility(@Body() newVisibility: Visibility){
    return this.visibilityService.createVisibility(newVisibility)
  }

  @Get()
  findAllVisbility(){
    return this.visibilityService.findAllVisibilities()
  }
}
