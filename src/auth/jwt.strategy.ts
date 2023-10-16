import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { configDotenv } from 'dotenv';

configDotenv();

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.BEARER
        })
    }

    async validate(payload: any) {
        console.log(payload)
        return true
    }
}