import {
  Controller,
  Get,
  Post,
  Response,
  HttpStatus,
  Body,
} from '@nestjs/common';

import { IndexService } from './index.service';
import * as dayjs from 'dayjs';
@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get('image')
  getDailyImg(@Response() response) {
    this.indexService.getDailyImg().subscribe(res => {
      return response.status(HttpStatus.OK).json(res.data);
    });
    // return response.json(await this.indexService.getImg());
  }
  @Get('getImg')
  getImg(@Response() response) {
    this.indexService.getDailyImg().subscribe(res => {
      const e = res.data;
      return response.json(e);
    });
  }
  @Get('datelist')
  getDateList(@Response() response) {
    const result = {
      details: [],
    } as any;
    this.indexService.getDateList().then(res => {
      let ntotalArt = 0;
      res.map(item => {
        ntotalArt = item.ncount + ntotalArt;
        result.details.push({
          ncount: item.ncount,
          sdate: dayjs(item.ddate).format('YYYY-MM-DD'),
        });
      });
      result.ntotalArt = ntotalArt;

      return response.json(result);
    });
  }
  @Get('test')
  test(@Body() data, @Response() response) {
    return (response = data);
  }
}
