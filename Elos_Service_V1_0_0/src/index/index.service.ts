import { Injectable, HttpService } from '@nestjs/common';
import { DTOAdminInfo } from './index.dto';
@Injectable()
export class IndexService {
  constructor(private readonly httpService: HttpService) {}
  getAdminInfo(): DTOAdminInfo {
    return {
      adminName: 'TsuBaSa',
    };
  }
  getDailyImg() {
    const url = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN`;
    const response = this.httpService.get(url);
    return response;
  }
  getUserMsg(): object {
    return {
      obj: '1',
      age: 22,
      name: 'linlin',
    };
  }
  getUserId() {
    return {
      user: '2',
    };
  }
}
