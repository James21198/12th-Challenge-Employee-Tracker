const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  // please add your password below
  password: 'Bcfc@1998',
  database: 'employee_db'
});

module.exports = pool;