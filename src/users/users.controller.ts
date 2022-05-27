import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './model/users.model';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService){}


  @Post()
  createUser(@Body() newUser: User){
    return this.userService.createUser(newUser);
  }

  @Put()
  updateUser(@Body() updatedUser: User){
    return this.userService.updateUser(updatedUser);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.userService.deleteUser(id)
  }

  @Get(':id')
  findOneUser(@Param('id') id: string){
    return this.userService.findOneUser(id)
  }
  @Get()
  findAllUser(){
    return this.userService.findAllUser()
  }
}
