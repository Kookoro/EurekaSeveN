import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { DTOAdminInfo } from './index.dto';
import { Admin } from './index.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AdminSchema } from './index.schema';

@Injectable()
export class IndexService {
  constructor(
    //将集合名注入   表名
    @InjectModel('Administrator') private readonly adminModel:Model<Admin> ,
    private readonly httpService: HttpService,
  
  ) {}
  getAdminInfo(): DTOAdminInfo {
    return {
      adminName: 'TsuBaSa',
    };
  }

  getDailyImg(): Observable<AxiosResponse<IndexService[]>> {
    return this.httpService.get(
      'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
    );
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
  async findAdmin():Promise<Admin[]>{
    return await this.adminModel.find().exec();
  }
}
