// Set up MySQL connection.
var mysql = require("mysql");

// Original connection variable before deployment to Heroku

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "public",
//   password: "yourpassword",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Connection updated for deployment to Heroku
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "public",
    password: "yourpassword",
    database: "burgers_db"
  })
};

connection.connect();

// Export connection for our ORM to use.
module.exports = connection;