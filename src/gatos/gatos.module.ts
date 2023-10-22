import { Module } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { GatosController } from './gatos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GatoSchema } from './interface/gatos.schema'
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "Gatos", schema: GatoSchema}
    ])
  ],
  providers: [
    GatosService,
  ],
  controllers: [GatosController]
})
export class GatosModule {}
