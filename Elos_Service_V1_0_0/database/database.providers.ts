import * as mongoose from 'mongoose';
import { DATABASE_URL } from '../src/db.config';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(DATABASE_URL),
  },
];
