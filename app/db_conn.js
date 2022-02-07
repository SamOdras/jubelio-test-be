const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const db_config = {
  host: process.env.DATABASE_PG_HOST,
  database: process.env.DATABASE_PG,
  user: process.env.DATABASE_PG_USERNAME,
  password: process.env.DATABASE_PG_PASSWORD,
  port: process.env.DATABASE_PG_PORT
}

const pool = new Pool(db_config)

module.exports = { pool }
