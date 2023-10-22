import { Module } from '@nestjs/common';
import { CarrosController } from './carros.controller';
import { CarrosService } from './carros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarroSchema } from './interface/carros.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "Carros", schema: CarroSchema}
    ])
  ],
  controllers: [CarrosController],
  providers: [
    CarrosService,
  ]
})
export class CarrosModule {}
