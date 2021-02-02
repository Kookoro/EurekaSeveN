import { UserCount } from './qltest.schema';
import { Document } from 'mongoose';
export interface UserCount extends Document {
  corpId: String;
  userid: String;
  nbacklog: Number;
  nmails: Number;
  nschedule: Number;
}
