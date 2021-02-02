import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCountController } from './qltest.controller';
import { UserCount } from './qltest.schema';
import { UserCountService } from './qltest.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: 'test',
        schema: UserCount,
        collection: 'test',
      },
    ]),
  ],
  controllers: [UserCountController],
  providers: [UserCountService],
})
export class UserCountModule {}
