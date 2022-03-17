var db = require('../db');

module.exports = {
  getAll: function () {
    // a function which produces all the messages
    return new Promise( (resolve, reject) => {
      db.query('SELECT * FROM messages;', (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
          // console.log('testing testing 123');
        }
      });
    });

  },
  create: function (message) {
    // a function which can be used to insert a message into the database

    return new Promise( (resolve, reject) => {
      let sqlString = `INSERT INTO messages (message, user_id, room_id) VALUES ('${message}', 2, 3);`;
      db.query(sqlString, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
          // console.log('testing testing 123');
        }
      });
    });

    // db.query('INSERT INTO messages VALUES (something)');
  }
};

