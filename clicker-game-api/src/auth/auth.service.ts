import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser({username, password}: AuthDto) {
        const user =  await this.usersService.findOneByUsername(username);
        if (!user){
            return null
        }
        if (password === user?.password) {
            // const {password, ...result} = user;
            // return this.jwtService.sign(result,{expiresIn:'5m'})
            return this.generateUserTokens(user.id, user.username);
        }
    }
    
    async generateUserTokens(user_id, username) {
        const access_token = this.jwtService.sign({user_id, username}, { expiresIn: '15m'});
        return {
            access_token,
        };
    }
}