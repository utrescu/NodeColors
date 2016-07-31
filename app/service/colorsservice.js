var connection = require('./connection')

function ColorsService() {
  // Obtenir tots els colors de la base de dades
  this.getAll = function (callback) {
    connection.getAll(function (err, result) {
      if (err) {
        result = JSON.parse('{"status": 1, "message": \"' + result + '"}');
      }
      callback(result);
    });
  };

  // Obtenir només el color especificat
  this.get = function (nom, callback) {
    connection.get(nom, function (err, result) {
      if (err) {
        var resultat = JSON.parse('{"status": 1, "message": \"' + result + '"}');
      } else {
        if (result.length == 0) {
          var resultat = JSON.parse('{"status": 1, "message": "No trobat"}');
        } else {
          var resultat = result[0];
        }
      }
      callback(resultat);
    })
  };

}

module.exports = new ColorsService();
