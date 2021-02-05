import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NEED_WARP_DATA } from '../transform.config';
interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  public intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    const handleStart = Date.now(); //开始时间
    const response = context.switchToHttp().getResponse(); //获取response对象
    const statusCode = response.statusCode; //获取状态码

    if (NEED_WARP_DATA) {
      return next.handle().pipe(
        map(data => {
          const handleEnd = Date.now();
          return {
            data,
            code: statusCode,
            message: '请求成功',
            currentTime: new Date().toISOString(),
            stime: handleStart,
            etime: handleEnd,
            timeDiff: handleEnd - handleStart + 'ms',
          };
        }),
      );
    } else {
      return next.handle().pipe(
        map(data => {
          return {
            data,
          };
        }),
      );
    }
  }
}
