import { Document } from 'mongoose';

export interface ArticleDateList  extends Document {
  readonly ncount : number;
  readonly ddate : Date;

}
