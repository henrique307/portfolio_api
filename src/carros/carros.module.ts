import { Module } from '@nestjs/common';
import { CarrosController } from './carros.controller';
import { CarrosService } from './carros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarroSchema } from './interface/carros.schema';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "Carros", schema: CarroSchema}
    ])
  ],
  controllers: [CarrosController],
  providers: [
    CarrosService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class CarrosModule {}
