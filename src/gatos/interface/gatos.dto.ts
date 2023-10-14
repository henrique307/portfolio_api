import { Matches, IsString, ValidateNested, IsIn } from "class-validator"
import { Type } from "class-transformer";

export class GatoDTO {
    @Matches(/[\w\-]{28,43}/, {
        message: "id do driver inválido"
    })
    drive_id: string
    
    @IsString()
    cor: string;
    
    @IsString()
    tamanho: string;
    
    @IsString()
    idade: string
}