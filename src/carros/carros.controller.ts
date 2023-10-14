import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarroDTO } from './interface/carros.dto';

@Controller('carros')
export class CarrosController {
    constructor(private readonly CarrosService: CarrosService) {}

    // TESTE
    // @Post()
    // bulkPost(@Body() carros: CarroDTO[]) {
    //     return this.CarrosService.createCarros(carros)
    // }

    @Get()
    findAll(@Query() query: Record<string, string>) {
        return this.CarrosService.findAll(query)
    }
}
