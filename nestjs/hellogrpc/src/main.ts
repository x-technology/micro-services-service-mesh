import { NestFactory } from '@nestjs/core';
import { HeroModule } from './hero/hero.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create(HeroModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, '../proto/hero.proto'),
      url: '0.0.0.0:50051',
    },
  });

  // console.log(app.getMicroservices())

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'hero',
  //     protoPath: join(__dirname, '../proto/hero.proto'),
  //     // url: '0.0.0.0:50051',
  //   },
  // });

  await app.startAllMicroservices();
  console.log(app.getMicroservices())


  // const config = new DocumentBuilder()
  //   .setTitle('GRPC example')
  //   .setDescription('The GRPC API description')
  //   .setVersion('1.0')
  //   .addTag('grpc')
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);

  console.log('running somewhere')
  // await app.listen();
}
bootstrap();
