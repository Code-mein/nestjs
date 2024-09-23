import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/entities/Users';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {

  //First inject the ORM repository to the service
  constructor(@InjectRepository(Users) private userRepository: Repository<Users> ){}

  findAll(): Promise<Users[]>{
    return this.userRepository.find({
      relations: ['profile','posts']
    });
  }

  createUser(userDetails: CreateUserParams): Promise<Users>{
   const newUser = this.userRepository.create({...userDetails, created_at: new Date()});
    return this.userRepository.save(newUser);
  }

  updateUser(id: number, userDetails: UpdateUserParams): Promise<UpdateResult>{
      const user = this.userRepository.update({id}, {...userDetails});
      return user;
  }

  deleteUser(id: number): Promise<DeleteResult>{
      return this.userRepository.delete({id});
  }

}
