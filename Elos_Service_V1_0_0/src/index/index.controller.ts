import {
  Controller,
  Get,
  Inject,
  Response,
  HttpStatus,
  Post,
  Body,
  Param,
} from '@nestjs/common';

import { IndexService } from './index.service';
@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get('getAdminInfo')
  getAdminInfo() {
    return this.indexService.getAdminInfo();
  }
  @Get('getDailyImg')
  getDailyImg(@Response() response) {
    this.indexService.getDailyImg().subscribe(res => {
      return response.status(HttpStatus.OK).json(res.data);
    });
  }
}
