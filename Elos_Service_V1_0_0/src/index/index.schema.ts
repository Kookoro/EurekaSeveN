
import * as mongoose from 'mongoose';
//定义mongodb的数据模型
export const AdminSchema = new mongoose.Schema({
  sname: String,
  sjobname: String,
  semail: String,
  sweibo: String,
}


);
export const AdtSchema = new mongoose.Schema( {
  ncount : Number,
  ddate : Date,
}
)
