import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginBody } from './loginBody.interface';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    login(loginBody: LoginBody) {
        // cria um log com a informação de quem apareceu aqui com nome e (se tiver) email

        return this.jwtService.sign(loginBody.nome);
    }
}
