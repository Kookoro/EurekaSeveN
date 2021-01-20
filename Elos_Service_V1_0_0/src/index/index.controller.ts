import { Controller, Get, Response, HttpStatus } from '@nestjs/common';
import { IndexService } from './index.service';

@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get('getAdminInfo')
  getAdminInfo() {
    return this.indexService.findAdmin();
  }
  @Get('getDailyImg')
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
}
