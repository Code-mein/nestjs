import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { Users } from 'src/typeorm/entities/Users';
import { CreateProfileParams } from 'src/utils/types.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>,
  @InjectRepository(Users) private userRepository: Repository<Users>
){}

  async createProfile(id: number,
    createProfileDetails: CreateProfileParams
  ){
    const user = await this.userRepository.findOneBy({id})
    if(!user){
      throw new HttpException('User not found', 404);
    }
    const newProfile = this.profileRepository.create(createProfileDetails);
    const savedProfile = await this.profileRepository.save(newProfile);
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }
}

