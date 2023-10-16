import { Post, Body } from '@nestjs/common'
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TelegramService } from 'src/utils/TelegramService/Telegram.service';
import { LoginBody } from './loginBody.interface';
import { Public } from 'src/utils/decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private telegramService: TelegramService
    ) { }

    @Public()
    @Post()
    auth(@Body() loginBody: LoginBody): string {
        this.telegramService.conexao(loginBody)
        return this.authService.login(loginBody)
    }
}
