import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SharesService } from './shares.service';
import { Share } from './model/shares.model';

@Controller('shares')
export class SharesController {

  constructor(private readonly sharesServices: SharesService) {
  }

  @Post()
  createShare(@Body() newShare: Share){
    return this.sharesServices.createShare(newShare)
  }

  @Put()
  updateShare(@Body() updatedShare: Share){
    return this.sharesServices.updateShare(updatedShare)
  }

  @Get()
  findAllShares(){
    return this.sharesServices.findAllShares()
  }

  @Get(':id')
  findOneShare(@Param('id') id: string){
    return this.sharesServices.findOneShare(id)
  }
  @Delete(':id')
  deleteShare(@Param('id') id: string){
    return this.sharesServices.deleteShare(id)
  }

}
