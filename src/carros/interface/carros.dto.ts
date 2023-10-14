import { Length, Matches, IsString, ValidateNested, IsIn } from "class-validator"
import { Type } from "class-transformer";

export class CarroDTO {
    @Matches(/[\w\-]{28,43}/, {
        message: "id do driver inválido"
    })
    drive_id: string
    
    // @IsIn(['vermelho', 'azul'])
    @IsString()
    cor: string;
    
    @IsString()
    tipo: string;
}