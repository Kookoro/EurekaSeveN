import { Controller, Get } from '@nestjs/common';

interface Message {}
@Controller('api')
export class IndexController {
  @Get('user')
  getUserInfo(): String {
    return '<h1>1</h1>';
  }

  @Get('notice')
  getMessage(): object[] {
    return [
      {
        id: '000001',
        text: '《小康人报》第276期领取通知',
        url: 'xxxxx',
      },
      {
        id: '000001',
        text: '《小康人报》第277期领取通知',
        url: 'xxxxx',
      },
      {
        id: '000001',
        text: '《小康人报》第278期领取通知',
        url: 'xxxxx',
      },
    ];
  }
}
