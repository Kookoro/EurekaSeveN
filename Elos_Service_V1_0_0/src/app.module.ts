import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndexService } from './index/index.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IndexService],
})
export class AppModule {}
