import { Controller, Get, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }



  @Get('user')
  getUserMsg(): object {
    // console.log('ok');
    return this.appService.getUserMsg();
  }
  @Get('xss')
  createXssAttack(@Req() request: Request): any {
    return {
      img: `<img onerror="alert('attacked!!!11')">`,
    };
  }
}
