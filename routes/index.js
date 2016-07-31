var express = require('express');
var router = express.Router();

var servei = require('../service/colorsservice');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colors en català' });
});

router.get('/colors', function(req, res, next) {
  console.log('Cercant tots els colors');
  servei.getAll(res);
  // res.end( JSON.stringify(data)); 
});

router.get('/color/:color', function(req, res, next) {
  console.log('Cercant ' + req.params.color);
  servei.get(req.params.color, res);
});

module.exports = router;

// var app = require('../app.js');

// app.get('/', function(req, res, next) {
//   res.render('index', { title: 'Buf'});
// });
