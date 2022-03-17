var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

// create the connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});


// this is a test
// connection.query(
//   'select * from messages;',
//   (err, results, fields) => {
//     console.log(results);
//   }
// );

module.exports = connection;

// uses mysql npm module to connect to the database server running on the computer
// Status: successfully connected