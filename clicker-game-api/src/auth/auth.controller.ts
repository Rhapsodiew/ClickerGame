import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Public } from './decorator/public.decorator';
import { LocalGuard } from './guards/local.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @Public()
    @UseGuards(LocalGuard)
    login(@Req() req) {
        return req.user;
    }

    
    @Get('profile')
    @UseGuards(JwtAuthGuard)
    profile(@Req() req) {
        return req.user;
    }
}