import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";

export type CarroDocument = HydratedDocument<Carro>

@Schema()
export class Carro {
    @Prop()
    drive_id: string;

    @Prop()
    cor: string

    @Prop()
    tipo: string
}

export const CarroSchema = SchemaFactory.createForClass(Carro);

