import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './dtos/UpdateUser.dto';

@Controller('users')
export class UsersController {

  constructor(
    //First inject the service to the controller
    private usersService: UsersService
  ){} 

  @Get()
  async getAllUsers(){
    const users = await this.usersService.findAll();
    return users;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto){
    const createdNewUser = await this.usersService.createUser(createUserDto);
    return createdNewUser;
  }

  @Put(':id')
  async updateUser(@Param('id', ParseIntPipe) userId: number,@Body() updateUser: updateUserDto){
    const update = await this.usersService.updateUser(userId, updateUser);
    return update;
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) userId: number){
    const deletedUser = await this.usersService.deleteUser(userId);
    return deletedUser;
  }
}
