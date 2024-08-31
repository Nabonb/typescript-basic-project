import dotenv from 'dotenv';
import path from 'path';

//path ta hocche current directory ar path ar sathe sathe .env add krse
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
