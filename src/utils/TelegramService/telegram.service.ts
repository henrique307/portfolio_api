import { Injectable } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { LoginBody } from 'src/auth/loginBody.interface';
import { Telegraf } from 'telegraf';

configDotenv();

@Injectable()
export class TelegramService {

    private readonly bot = new Telegraf(process.env.PORTFOLIO_BOT);
    private readonly ids = ["5090838886"]

    async conexao(loginBody: LoginBody) {
        for (let id of this.ids) {
            await this.bot.telegram
                .sendMessage(
                    id,
                    `Login realizado por ${loginBody.nome}, ${
                        loginBody.email ?
                            `foi informado o email ${loginBody.email}`
                            : `não foi informado nenhum email`
                        }`
                )
        }
    }

}