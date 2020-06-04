import mysql from 'mysql';

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    this.connection.connect(error => {
      if (error) {
        console.log(`Database connection fail: ${error}`);
      } else {
        console.log('Database connection success');
      }
    });
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (error, rows) => {
        if (error) return reject(error);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(error => {
        if (error) return reject(error);
        resolve();
      });
    });
  }
}

export default new Database();
