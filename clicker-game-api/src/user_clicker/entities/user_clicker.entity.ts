import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Clicker } from "src/clicker/entities/clicker.entity";

@Entity()
export class UserClicker {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id, { eager: true})
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    @IsNotEmpty()
    user: User;

    @ManyToOne(() => Clicker, (clicker)=> clicker.id, { eager: true})
    @JoinColumn({ name: 'clicker_id', referencedColumnName: 'id' })
    @IsNotEmpty()
    clicker: Clicker;
}
