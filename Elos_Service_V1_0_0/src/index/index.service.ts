import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DTOAdminInfo } from './dto/index.dto';
import { AxiosResponse } from 'axios';
@Injectable()
export class IndexService {
  constructor(private readonly httpService: HttpService) {}
  getAdminInfo(): DTOAdminInfo {
    return {
      adminName: 'TsuBaSa',
    };
  }
  // async getDailyImg() {
  //   const http = new HttpService();
  //   const url = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN`;
  //   const response = await http.get(url);
  //   return response;
  // }

  getDailyImg(): Observable<AxiosResponse<IndexService[]>> {
    const result = this.httpService.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
    return result;
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
