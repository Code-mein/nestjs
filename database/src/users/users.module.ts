import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/entities/Users';

@Module({
  imports: [
    // This module is used to inject the ORM repository to the service
    TypeOrmModule.forFeature([Users]), // this will auto load all the entities from the entities folder
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
