import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.enableCors({
    origin: process.env.NEXT_PUBLIC_APP_URL,
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH'],
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
  });

  const config = new DocumentBuilder()
    .setTitle('Billing Information')
    .setDescription('API billing for customers')
    .setVersion('1.0')
    .addTag('billing')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
