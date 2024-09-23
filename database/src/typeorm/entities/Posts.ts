import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity({ name: 'posts' })
export class Posts {
  
  @PrimaryGeneratedColumn({
    type:"bigint"
  })
  id: number;
  
  @Column()
  content: string;

  @ManyToOne(() => Users, user => user.posts)
  user: Users;
}