import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndexController } from './index/index.controller';
import { LoginController } from './login/login.controller';

@Module({
  imports: [],
  controllers: [AppController, IndexController, LoginController],
  providers: [AppService],
})
export class AppModule {}
