// setting up my MySQL connection

var mysql = require("mysql");
require("dotenv").config();
var key = require("./key.js");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: key.mysqlaccess.access,
        database: "burger_db"
    });
};
// connection will be made here

connection.connect(function (err) {

    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connect to ORM

module.exports = connection;