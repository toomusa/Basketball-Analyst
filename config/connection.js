var keys = require("./keys.js")
var mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.password,
    database: "todo_db"
});

module.exports = connection;