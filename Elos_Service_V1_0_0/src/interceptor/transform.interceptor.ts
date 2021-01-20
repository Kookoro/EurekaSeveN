import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
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
    const handleStart = Date.now();
    const response = context.switchToHttp().getResponse();
    const statusCode = response.statusCode;
    debugger;
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
  }
}
