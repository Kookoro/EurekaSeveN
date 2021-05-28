import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform.interceptor';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  //静态图片地址
  // app.useStaticAssets(join(__dirname,'..','public'),'static/images'); //配置静态目录
  app.useStaticAssets('public/images'); //直接访问图片
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor()); //统一格式返回;

  await app.listen(3090);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
