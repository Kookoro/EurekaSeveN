import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { IndexModule } from './index/index.module';
@Module({
  imports: [IndexModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
