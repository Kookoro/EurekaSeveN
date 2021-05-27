import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndexController } from './index.controller';
import { AdtSchema } from './index.schema';
import { IndexService } from './index.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: 'articleDateList',//
        schema:AdtSchema,
        collection: 'articleDateList',
      },
    ]),
  ],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
