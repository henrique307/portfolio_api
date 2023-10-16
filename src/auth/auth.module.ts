import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { configDotenv } from 'dotenv';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { TelegramService } from 'src/utils/TelegramService/Telegram.service';
import { JwtStrategy } from './jwt.strategy';

configDotenv();

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: process.env.SECRET,
            // signOptions: {expiresIn: '1d'}
        })
    ],
  providers: [AuthService, TelegramService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
