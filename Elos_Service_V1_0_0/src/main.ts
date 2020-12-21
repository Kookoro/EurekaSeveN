import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { dirname, join } from 'path';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  //静态图片地址
  app.useStaticAssets('static/images'); //配置静态目录
  app.useStaticAssets('static/images', {
    prefix: '/images/',
  }); //配置虚拟静态目录

  await app.listen(3090);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
