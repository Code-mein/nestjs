import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/typeorm/entities/Posts';
import { Users } from 'src/typeorm/entities/Users';
import { CreatePost } from 'src/utils/types.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {

  constructor(
    // This controller is used to inject
    // the service
    @InjectRepository(Posts) private postsRepository: Repository<Posts>,
    @InjectRepository(Users) private userRepository: Repository<Users>
  ) {}  
  async createPost(
    id: number,
    createPostDto: CreatePost
  ) {
    const user = await this.userRepository.findOneBy({id});
    if(!user){
      throw new HttpException('User not found', 404);
    }
    const newPost = this.postsRepository.create({...createPostDto, user});
    return await this.postsRepository.save(newPost);
  }
}
