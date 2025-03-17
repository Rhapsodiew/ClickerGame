// import { UserClicker } from "src/user_clicker/entities/user_clicker.entity";
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

    @Column({
        type: 'float',
        default: 0
    })
    score: number;

    @Column({
        type: 'float',
        default: 1
    })
    nb_per_click: number;

    @Column({
        type: 'float',
        default: 0
    })
    auto_clicker: number;

    // @OneToMany(() => UserClicker, userClicker => userClicker.user)
    // userClicker: UserClicker[];
    
    // clicker: string;
}
