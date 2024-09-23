import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from 'src/typeorm/entities/Posts';
import { Users } from 'src/typeorm/entities/Users';

@Module({
  imports: [
    // This module is used to inject the ORM repository to the service
    TypeOrmModule.forFeature([Posts, Users]), // this will auto load all the entities from the entities
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
