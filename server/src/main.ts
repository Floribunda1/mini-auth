import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

function createSwaggerDocument(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('mini-auth')
    .setDescription('mini-auth api docs')
    .setVersion('1.0');

  config.addTag('user').addTag('auth').addTag('role').addTag('permission');

  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  createSwaggerDocument(app);

  await app.listen(3000);
}

bootstrap();
