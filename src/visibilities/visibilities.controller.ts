import { Controller, Get, Put, Delete, Post, Param } from '@nestjs/common';
import { VisibilitiesService } from './visibilities.service';

@Controller('visibilities')
export class VisibilitiesController {

  constructor(private readonly visibilityService: VisibilitiesService){}

  @Get(':id')
  findOneVisibities(@Param('id') id: string){
    return this.visibilityService.findOneVisibity(id)
  }
}
