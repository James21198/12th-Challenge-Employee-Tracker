const { Pool } = require("pg");
class Database {
  constructor(options) {
    this.options = options;
    this.db = null;
  }

  validate() {
    const { host, user, password, database } = this.options;
    if (!host || !user || !password || !database)
      throw new Error("Database configuration is invalid.");
    return;
  }

  connect() {
    this.validate();

    const { host, user, password, database } = this.options;

    // Connect to database
    const pool = new Pool(
      {
        // TODO: Enter PostgreSQL username
        user: user,
        // TODO: Enter PostgreSQL password
        password: password,
        host: host,
        database: database,
      },
      console.log(`Connected to the employee_db database.`)
    );

    pool.connect();
    this.db = pool;
  }
  disconnect() {
    this.db.disconnect();
  }
}

module.exports = Database;