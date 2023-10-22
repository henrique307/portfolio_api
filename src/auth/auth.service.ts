import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginBody } from './loginBody.interface';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    login(loginBody: LoginBody) {
        return this.jwtService.sign(loginBody.nome);
    }
}
