import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  //静态图片地址
  // app.useStaticAssets(join(__dirname,'..','public'),'static/images'); //配置静态目录
  app.useStaticAssets('public/images'); //直接访问图片

  await app.listen(3090);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
