var db = require('../db');

module.exports = {
  getAll: function () {
    return new Promise( (resolve, reject) => {
      db.query('SELECT * FROM users;', (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);

        }
      });
    });
  },
  create: function (name) {
    return new Promise( (resolve, reject) => {
      let sqlString = `INSERT INTO users (username) VALUES ('${name}');`;
      db.query(sqlString, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};
