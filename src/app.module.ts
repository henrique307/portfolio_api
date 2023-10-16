import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GatosModule } from './gatos/gatos.module';
import { CarrosModule } from './carros/carros.module';
import { configDotenv } from 'dotenv';
import { AuthModule } from './auth/auth.module';

configDotenv();

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@fotos-cluster.9tl4t0g.mongodb.net/?retryWrites=true&w=majority`),
    GatosModule,
    CarrosModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }

// catch(err: Error) {
//     console.error(err)
// },