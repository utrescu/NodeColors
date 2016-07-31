var mysql = require('mysql');

var config = require('config');
var dbconfig = config.get('Colors.database');

function Connection() {
  this.pool = null;

  this.init = function () {
    this.pool = mysql.createPool(
      dbconfig
    );
  };

  this.acquire = function (callback) {
    this.pool.getConnection(function (err, connection) {
      callback(err, connection);
    });
  };

  this.getAll = function (callback) {
    this.acquire(function (err, con) {
      con.query('select * from color', function (err, result) {
        con.release();
        if (err) {
          var resultat = err;
        } else {
          var resultat = result;
        }
        callback(err, resultat);
      });
    });
  }

  this.get = function (nom, callback) {
    this.acquire(function (err, con) {
      con.query('select * from color where nom = ?', [nom], function (err, result) {
        con.release();
        if (err) {
          var resultat = err;
        } else {
          var resultat = result;
        }
        callback(err, resultat);
      })
    })
  }

}

module.exports = new Connection();