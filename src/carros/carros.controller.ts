import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarroDTO } from './interface/carros.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags, ApiHeader } from '@nestjs/swagger';
import { Carro } from './interface/carros.schema';
import { AuthGuard } from '@nestjs/passport';
import { Unauthorized } from 'src/auth/interface/apiResponse.interfaces';

@UseGuards(AuthGuard('jwt'))
@ApiTags("Imagens Carros")
@ApiBearerAuth()
@Controller("carros")
export class CarrosController {
    constructor(private readonly CarrosService: CarrosService) {}

    // TESTE
    // @Post()
    // bulkPost(@Body() carros: CarroDTO[]) {
    //     return this.CarrosService.createCarros(carros)
    // }

    @ApiHeader({
        name: 'Authorization',
        description: 'Token de autenticação Bearer',
        required: true,
    })
    @ApiOperation({
        summary: "retorna ids de carros e suas tags",
        description: "Retorna um objeto com ids do drive com fotos de carros e suas tags,  é necessária a authenticação com o token que será fornecido após a autenticação na rota /auth",
    })
    @ApiResponse({description: "retorna os objetos", type: CarroDTO, isArray: true, status:200})
    @ApiResponse({description: "não autorizado", type: Unauthorized, status: 401 })
    @ApiQuery({name: "cor", required: false, type: String, description: "procura por carros com a cor especificada", example: "Branco"})
    @ApiQuery({name: "tipo", required: false, type: String, description: "procura por carros com o tipo especificado", example: "Esporte"})
    @Get()
    findAll(@Query() query: Record<string, string>): Promise<Carro[]> {
        return this.CarrosService.findAll(query)
    }
}