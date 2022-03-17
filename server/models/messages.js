var db = require('../db');

module.exports = {
  getAll: function () {
    db.query('SELECT * FROM')
  }, // a function which produces all the messages
  create: function () {
    db.query('INSERT INTO databaseName VALUES (something)');
  } // a function which can be used to insert a message into the database
};

