import { Controller, Get, Query } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarroDTO } from './interface/carros.dto';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Carro } from './interface/carros.schema';

@ApiTags("Imagens Carros")
@Controller("carros")
export class CarrosController {
    constructor(private readonly CarrosService: CarrosService) {}

    // TESTE
    // @Post()
    // bulkPost(@Body() carros: CarroDTO[]) {
    //     return this.CarrosService.createCarros(carros)
    // }

    @ApiOperation({
        summary: "retorna imagens de carros e suas tags",
        description: "Retorna um objeto com ids do drive com fotos de carros e suas tags",
    })
    @ApiResponse({description: "retorna os objetos", type: CarroDTO, isArray: true, status:200})
    @ApiQuery({name: "cor", required: false, type: String, description: "procura por carros com a cor especificada", example: "Branco"})
    @ApiQuery({name: "tipo", required: false, type: String, description: "procura por carros com o tipo especificado", example: "Esporte"})
    @Get()
    findAll(@Query() query: Record<string, string>): Promise<Carro[]> {
        return this.CarrosService.findAll(query)
    }
}