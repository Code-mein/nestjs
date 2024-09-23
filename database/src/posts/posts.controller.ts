import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePost } from 'src/utils/types.dto';

@Controller('posts')
export class PostsController {
  constructor(
    // This controller is used to inject the service
    private postsService: PostsService
  ) {}
  
  @Post(":id")
  async createPost(@Param("id", ParseIntPipe) id: number, @Body() createPostDto: CreatePost){
    const post = await this.postsService.createPost(id, createPostDto);
    return post;
  }
}
