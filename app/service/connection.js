var mysql = require("mysql");

var config = require("config");
var dbconfig = config.get("Colors.database");

function Connection() {
  this.pool = null;

  this.init = function () {
    this.pool = mysql.createPool(dbconfig);
  };

  this.getAll = function (callback) {
    this.pool.query("select * from color", function (err, result) {
      // con.release();
      if (err) {
        var resultat = err;
      } else {
        resultat = result;
      }
      callback(err, resultat);
    });
  };

  this.get = function (nom, callback) {
    this.pool.query("select * from color where nom = ?", [nom], function (
      err,
      result
    ) {
      // con.release();
      if (err) {
        var resultat = err;
      } else {
        resultat = result;
      }
      callback(err, resultat);
    });
  };
}

module.exports = new Connection();
