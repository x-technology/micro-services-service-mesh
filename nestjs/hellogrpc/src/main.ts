import { NestFactory } from '@nestjs/core';
import { HeroModule } from './hero/hero.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(HeroModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, '../proto/hero.proto'),
    },
  });

  await app.listen();
}
bootstrap();
