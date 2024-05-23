import dotenv from "dotenv";

dotenv.config();

const DBCONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'trisure',
  port: process.env.DB_PORT || 3306,
};

export default DBCONFIG;