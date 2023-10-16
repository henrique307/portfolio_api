import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const swaggerConfig = new DocumentBuilder()
    .setTitle("Portfolio API")
    .setDescription("API desenvolvida para fornecer imagens e afins ao meu portfolio <link do portfolio>")
    .setVersion("1.0")
    .addTag("Portfolio")
    .build();

export const document = (app: any) => SwaggerModule.createDocument(app, swaggerConfig)