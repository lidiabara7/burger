//code to connect node to mySQL

var mysql = require("mysql");

//creating the connection
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "asdfasdf",
        database: "burgers_db"
      });

connection.connect(function (err){
    if (err) {
        console.log("connection error:" + err.stack);
        return;
    }
    console.log("Connected as id" + connection.threadId);
});

module.exports = connection;