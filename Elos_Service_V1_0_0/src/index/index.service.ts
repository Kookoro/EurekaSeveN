import { Injectable, HttpService } from '@nestjs/common';
import { DTOAdminInfo } from './index.dto';
@Injectable()
export class IndexService {
  // constructor(private readonly http: HttpService) {}
  getAdminInfo(): DTOAdminInfo {
    return {
      adminName: 'TsuBaSa',
    };
  }
  async getDailyImg() {
    const http = new HttpService();
    const url = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN`;
    const response = await http.get(url);
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
