import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class LoginBody {
    @ApiProperty({ type: String })
    @IsString({ message: "nome deve ser do tipo string" })
    nome: string

    @ApiProperty({ type: String })
    @IsEmail({}, { message: "formato do email inválido" })
    email?: string
}