import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { GatoDTO } from './interface/gatos.dto';

@Controller('gatos')
export class GatosController {
    constructor(private readonly gatoService: GatosService) {}

    // TESTE
    // @Post()
    // bulkInsert(@Body() gatos: GatoDTO[]) {
    //     return this.gatoService.createGatos(gatos)
    // }

    @Get()
    findAll(@Query() query: Record<string, string>) {
        return this.gatoService.findAll(query)
    }
}
