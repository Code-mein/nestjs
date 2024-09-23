import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profile' })
export class Profile{

    @PrimaryGeneratedColumn({
        type: 'bigint'
    }) // auto increment
    id: number;

    @Column()
    dob: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}