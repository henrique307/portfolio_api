import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Carro } from './interface/carros.schema';
import { CarroDTO } from './interface/carros.dto';

@Injectable()
export class CarrosService {
    constructor(@InjectModel("Carros") private readonly carroModel: Model<Carro>) {}

    // TESTE
    // async createCarros(carros: CarroDTO[]) {
    //     return await this.carroModel.create(carros)
    // }

    async findAll(query: Record<string, string>) {
        return await this.carroModel
            .find(query, {__v: 0, _id: 0})
            .collation({ strength: 2, locale: 'pt' })
            .exec()
    }
}
