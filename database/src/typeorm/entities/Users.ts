import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";
import { Posts } from "./Posts";

@Entity({ name: 'users' })
export class Users {
    @PrimaryGeneratedColumn({
      type: 'bigint'
    }) // auto increment
    id: number;

    @Column({
      unique: true
    })
    email: string;

    @Column({ nullable: true })
    nullablField: string;

    @Column({default: 'password'})
    password: string;

    @Column()
    created_at: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile; 

    @OneToMany(() => Posts, post => post.user)
    @JoinColumn()
    posts:Posts[];

}

