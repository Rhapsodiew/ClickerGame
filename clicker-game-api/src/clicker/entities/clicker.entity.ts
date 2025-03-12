import { UserClicker } from "src/user_clicker/entities/user_clicker.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clicker {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'float',
        default: 0
    })
    score: number;

    @Column({
        type: 'float',
        default: 1
    })
    boost_clicker: number;

    @OneToMany(() => UserClicker, userClicker => userClicker.user)
    userClicker: UserClicker[];
    
    // @Column()
    // autoclicker: [];
}

