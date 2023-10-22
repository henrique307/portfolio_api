import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { GatoDTO } from './interface/gatos.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags, ApiHeader } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Unauthorized } from 'src/auth/interface/apiResponse.interfaces';

@UseGuards(AuthGuard('jwt'))
@ApiTags("Imagens Gatos")
@ApiBearerAuth()
@Controller("gatos")
export class GatosController {
    constructor(private readonly gatoService: GatosService) { }

    
    @ApiHeader({
        name: 'Authorization',
        description: 'Token de autenticação Bearer',
        required: true,
    })
    @ApiOperation({
        summary: "retorna ids de carros e suas tags",
        description: "Retorna um objeto com ids drive com fotos de gatos e suas tags, é necessária a authenticação com o token que será fornecido após a autenticação na rota /auth"
    })
    @ApiResponse({ isArray: true, status: 200, type: GatoDTO, description: "retorna os objetos" })
    @ApiResponse({ status: 401, type: Unauthorized, description: "não autorizado" })
    @ApiQuery({ name: "cor", required: false, type: String, description: "procura por gatos com a cor especificada", example: "Branco" })
    @ApiQuery({ name: "idade", required: false, type: String, description: "procura por gatos com a idade especificada", example: "filhote" })
    @ApiQuery({ name: "tamanho", required: false, type: String, description: "procura por gatos com a tamanho especificado", example: "gordinho" })
    @Get()
    findAll(@Query() query: Record<string, string>) {
        return this.gatoService.findAll(query)
    }
}
