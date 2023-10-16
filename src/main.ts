import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { document } from './utils/NestSwagger/nestSwagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('api/swagger', app, document(app))

  await app.listen(3000);
}
bootstrap();
