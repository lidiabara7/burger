var orm = require("../config/orm");
// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
//funtions that will intearact with the server
var burger = {
  //select all the burger table entries
  selectAll: function(callback) {
    orm.selectAll("burger", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burger", cols, vals, function(res) {
      callback(res);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      callback(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("cats", condition, function(res) {
      callaback(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
