import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProfileDto } from './dtos/createProfile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

  constructor(
    private profileService: ProfileService
  ){}

  @Post(':id')
  async creteProfile(@Param("id", ParseIntPipe) id: number,@Body() createProfileDto: CreateProfileDto){
    const profile = await this.profileService.createProfile(id, createProfileDto);
    return 'Profile created';
  }
}
