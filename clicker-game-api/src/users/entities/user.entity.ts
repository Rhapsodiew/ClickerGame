import { UserClicker } from "src/user_clicker/entities/user_clicker.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    username: string;

    @Column({
        type: 'varchar'
    })
    password: string;

    @Column({
        type: 'varchar',
        unique: true,
        length: 50
    })
    email: string;

    @OneToMany(() => UserClicker, userClicker => userClicker.user)
    userClicker: UserClicker[];
    
    // clicker: string;
}
