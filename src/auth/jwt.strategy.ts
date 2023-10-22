import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { configDotenv } from "dotenv";
import { ExtractJwt, Strategy } from "passport-jwt";

configDotenv()

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        })
    }

    async validate(payload: any) {
        return true
    }
}