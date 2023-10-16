import { Matches, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";

export class CarroDTO {

    @ApiProperty({ type: String })
    @Matches(/[\w\-]{28,43}/, {
        message: "id do driver inválido"
    })
    drive_id: string

    // @IsIn(['vermelho', 'azul'])
    @ApiProperty({ type: String })
    @IsString()
    cor: string;

    @ApiProperty({ type: String })
    @IsString()
    tipo: string;
}