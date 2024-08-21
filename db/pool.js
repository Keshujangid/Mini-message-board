const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.USER_NAME}:${process.env.PASSWORD}@localhost:5432/top_users`

});

module.exports = pool;
