import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCount } from './qltest.interface';
import { DtoUserInfo } from './qltest.dto';
@Injectable()
export class UserCountService {
  constructor(
    @InjectModel('test') private readonly userCount: Model<UserCount>,
  ) {}

  async findUser(id: string): Promise<UserCount[]> {
    const result = await this.userCount.find({ userid: id });
    return result;
  }

  async addUser(param: DtoUserInfo): Promise<UserCount[]> {
    // await this.userCount.insert(param);

    const result = await this.userCount.find({});
    return result;
  }
}
