import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";

export type GatoDocument = HydratedDocument<Gato>

@Schema()
export class Gato {
    @Prop()
    drive_id: string;

    @Prop()
    cor: string;

    @Prop()
    tamanho: string;

    @Prop()
    idade: string;
}

export const GatoSchema = SchemaFactory.createForClass(Gato);