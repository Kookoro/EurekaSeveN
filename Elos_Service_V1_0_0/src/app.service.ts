import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUserMsg(): object {
    return {
      obj: '1',
      age: 22,
      name: 'linlin',
    };
  }
  getUserId(){
    return {
      user:'2'
    }
  }
}
