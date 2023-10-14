import { Module } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { GatosController } from './gatos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GatoSchema } from './interface/gatos.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "Gatos", schema: GatoSchema}
    ])
  ],
  providers: [GatosService],
  controllers: [GatosController]
})
export class GatosModule {}
