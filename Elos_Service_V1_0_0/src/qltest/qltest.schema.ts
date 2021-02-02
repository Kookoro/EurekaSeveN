import * as mongoose from 'mongoose';
//定义mongodb的数据模型
export const UserCount = new mongoose.Schema(
  {
    corpId: String,
    userid: String,
    nbacklog: Number,
    nmails: Number,
    nschedule: Number,
  },
  {
    collection: 'test',
  },
);
