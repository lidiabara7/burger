var connection = require("../config/connection");
// start with controller then the 
//then go to the burger.js
//model is what the data looks like in the database
var orm = {
    //object/function to read what is in the database
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers"
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        })
    },

    //this fucntion is to query the database to add/create information
    insertOne: function (burger_name, callback) {
        var queryString = "INSERT INTO products SET ?"
        connection.query(queryString,
            {
                burger_name: burger_name,
                devoured: false
            },
            function (err, res) {
                if (err) throw err;
                callback(res);
                console.log(res);
            });
    },
    //this function is to update the data base
    updateOne: function () {
        var queryString = "UPDATE burgers SET ? WHERE ?"
        connection.query(queryString,
            [
                { devoured: true },
                { id: id }
            ],
            function (err, res) {
                if (err) throw err;
                callback(res);

            });
    }
};

module.exports = orm;