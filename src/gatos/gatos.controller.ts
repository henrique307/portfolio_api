import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { GatoDTO } from './interface/gatos.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Imagens Gatos")
@Controller("gatos")
export class GatosController {
    constructor(private readonly gatoService: GatosService) {}

    // TESTE
    // @Post()
    // bulkInsert(@Body() gatos: GatoDTO[]) {
    //     return this.gatoService.createGatos(gatos)
    // }

    @ApiOperation({
        description: "Retorna um objeto com ids drive com fotos de gatos e suas tags"
    })
    @ApiResponse({isArray: true, status:200, type: GatoDTO, description: "retorna os objetos"})
    @ApiQuery({name: "cor", required: false, type: String, description: "procura por gatos com a cor especificada", example: "Branco"})
    @ApiQuery({name: "idade", required: false, type: String, description: "procura por gatos com a idade especificada", example: "filhote"})
    @ApiQuery({name: "tamanho", required: false, type: String, description: "procura por gatos com a tamanho especificado", example: "gordinho"})
    @Get()
    findAll(@Query() query: Record<string, string>) {
        return this.gatoService.findAll(query)
    }
}
