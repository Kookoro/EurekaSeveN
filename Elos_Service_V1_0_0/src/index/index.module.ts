import { Module,HttpModule} from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';
@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
