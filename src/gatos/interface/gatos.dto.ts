import { Matches, IsString, ValidateNested, IsIn } from "class-validator"
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class GatoDTO {

    @ApiProperty({ type: String })
    @Matches(/[\w\-]{28,43}/, {
        message: "id do driver inválido"
    })
    drive_id: string

    @ApiProperty({ type: String })
    @IsString()
    cor: string;

    @ApiProperty({ type: String })
    @IsString()
    tamanho: string;

    @ApiProperty({ type: String })
    @IsString()
    idade: string
}