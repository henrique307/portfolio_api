import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gato } from './interface/gatos.schema';
import { Model } from 'mongoose';
import { GatoDTO } from './interface/gatos.dto';

@Injectable()
export class GatosService {
    constructor(@InjectModel("Gatos") private readonly gatoModel: Model<Gato>) { }

    // TESTE
    // async createGatos(gatos: GatoDTO[]) {
    //     return await this.gatoModel.create(gatos)
    // }

    async findAll(query: Record<string, string>) {
        return await this.gatoModel
            .find(query, { __v: 0, _id: 0 })
            .collation({ locale: 'pt', strength: 2 })
            .exec()
    }
}
