import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndexController } from './index.controller';
import { AdminSchema } from './index.schema';
import { IndexService } from './index.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: 'Administrator',
        schema: AdminSchema,
        collection: 'Administrator',
      },
    ]),
  ],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
