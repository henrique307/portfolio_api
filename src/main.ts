import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { document } from './utils/NestSwagger/nestSwagger.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )

  SwaggerModule.setup('api/swagger', app, document(app))

  await app.listen(port);
}
bootstrap();
