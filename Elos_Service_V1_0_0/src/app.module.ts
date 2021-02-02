import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { IndexModule } from './index/index.module';
import { UserCountModule } from './qltest/qltest.module';
@Module({
  imports: [
    IndexModule,
    UserCountModule,
    MongooseModule.forRoot('mongodb://106.15.61.198:27017/Elos_DataBase'),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
