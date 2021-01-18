import { Document } from 'mongoose';
export interface Admin extends Document {
  readonly sname: string;
  readonly sjobname: string;
  readonly semail: string;
  readonly sweibo: string;
}
