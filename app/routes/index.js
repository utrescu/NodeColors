var express = require('express');
var router = express.Router();

var servei = require('../service/colorsservice');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colors en català' });
});

router.get('/colors', function(req, res, next) {
  console.log('Cercant tots els colors');
  res.header("Content-Type", "application/json");     
  servei.getAll(function(data) {
    res.send(data);
  });
});
  // res.end( JSON.stringify(data)); 


router.get('/color/:color', function(req, res, next) {
  console.log('Cercant ' + req.params.color);
  res.header("Content-Type", "application/json");     
  
  servei.get(req.params.color, function(data) {    
    res.send(data);  
  });
});

module.exports = router;
