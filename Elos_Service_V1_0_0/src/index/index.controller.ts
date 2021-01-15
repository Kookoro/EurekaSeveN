import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Response,
} from '@nestjs/common';
import { query } from 'express';

interface Message {
  id: string;
  text: string;
  url: string;
}
interface DtofindUrl {
  id?: string;
  num: string;
}

interface DTOlist {
  id: string;
  ntype: number;
  ncount: number;
}

@Controller('api')
export class IndexController {
  @Get('user')
  getUserInfo(): String {
    return '<h1>1</h1>';
  }
  @Post('getUrl')
  @HttpCode(201)
  saveMessage(@Body() body: DtofindUrl, @Response() res) {
    if (!body) {
      return {
        url: 'xxx',
      };
    }

    const array = [
      {
        url: 'https://www.baidu.com/',
      },
      {
        url: 'https://www.bilibili.com/',
      },
      {
        url: 'https://www.apple.com.cn/',
      },
    ];

    res.json({
      result: array[body.num],
    });
  }

  @Get('info')
  getInfo(): DTOlist[] {
    return [
      {
        id: '00001',
        ntype: 0,
        ncount: 0,
      },
      {
        id: '00002',
        ntype: 1,
        ncount: 555,
      },
    ];
  }

  @Get('notice')
  getMessage(@Query() query: object): Message[] {
    console.log(query);
    return [
      {
        id: '000001',
        text:
          '《小康人报》第277期领取通知测试长度测试长度测试长度测试长度测试长度测试长度',
        url: 'xxxxx',
      },
      {
        id: '000001',
        text:
          '《小康人报》第278期领取通知测试长度测试长度测试长度测试长度测试长度测试长度',
        url: 'xxxxx',
      },
      {
        id: '000001',
        text:
          '《小康人报》第279期领取通知测试长度测试长度测试长度测试长度测试长度测试长度',
        url: 'xxxxx',
      },
      {
        id: '000001',
        text: '《小康人报》第280期领取通知',
        url: 'xxxxx',
      },
      {
        id: '000001',
        text: '《小康人报》第221期领取通知',
        url: 'xxxxx',
      },
      {
        id: '000001',
        text: '《小康人报》第232期领取通知',
        url: 'xxxxx',
      },
    ];
  }
}
