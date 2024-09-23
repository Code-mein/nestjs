import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './typeorm/entities/Users';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { ProfileModule } from './profile/profile.module';
import { Posts } from './typeorm/entities/Posts';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql', // your database type
      host: 'localhost', // your mysql host
      port: 3306, // default port of mysql
      username: 'root', // your mysql username
      password: 'password', // your mysql password
      database: 'nestjs_tutorial', // create this database in your mysql
      entities: [Users,Profile,Posts], // this will auto load all the entities from the entities folder
      synchronize: true, // this will auto create tables if not exist from the entities
    }
  ), UsersModule, ProfileModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
