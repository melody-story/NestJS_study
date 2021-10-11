import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { triggerAsyncId } from 'async_hooks';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({
      whitelist : true,
      forbidNonWhitelisted : true,
      transform: true
    })
  );
  await app.listen(3000);
}
bootstrap();
