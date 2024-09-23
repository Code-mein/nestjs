import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { Users } from 'src/typeorm/entities/Users';

@Module({
  imports:[
    // This module is used to inject the ORM repository to the service
     TypeOrmModule.forFeature([Profile, Users]), // this will auto load all the entities from the entities
  ],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}
