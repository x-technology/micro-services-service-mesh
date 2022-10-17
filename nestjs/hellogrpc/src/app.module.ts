import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { EcbProviderModule } from './ecb-provider/ecb-provider.module';

@Module({
  imports: [HeroModule, EcbProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
