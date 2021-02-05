import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { IndexModule } from './index/index.module';
import { UserCountModule } from './qltest/qltest.module';
import { DATABASE_URL } from './dataBase.config';
@Module({
  imports: [IndexModule, UserCountModule, MongooseModule.forRoot(DATABASE_URL)],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
