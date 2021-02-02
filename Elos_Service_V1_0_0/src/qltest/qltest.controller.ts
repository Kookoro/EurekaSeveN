import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { DtoUserInfo } from './qltest.dto';
import { UserCountService } from './qltest.service';
@Controller('test')
export class UserCountController {
  constructor(private readonly service: UserCountService) {}
  @Get('count')
  getBacklogCount(@Query() req: DtoUserInfo) {
    if (req) {
      if (req.userid == '') {
      } else {
        return this.service.findUser(req.userid);
      }
    }
  }
  @Post('addcount')
  addBacklogCount(@Body() params) {
    if (params) {
      return this.service.addUser(params);
    }
  }
}
