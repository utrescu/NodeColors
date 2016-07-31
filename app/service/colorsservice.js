var connection = require('./connection')

function ColorsService() {
  // Obtenir tots els colors de la base de dades
  this.getAll = function(res) {
    connection.getAll(function (result) {  
      res.header("Content-Type", "application/json");     
      res.send(result);
    });
  };

  // Obtenir només el color especificat
  this.get = function(nom, res) {
    connection.get(nom, function(result) {    
      res.header("Content-Type", "application/json");  
      res.send(result);
    })
  };

}

module.exports = new ColorsService();
