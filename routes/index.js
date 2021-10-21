var express = require('express');
var router = express.Router();

/* GET home page.(index.ejs) */
router.get('/', function(req, res, next) {
  res.send("Bienvenidos");
});
/* GET home page.(index.ejs) */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Valisalud' });
});

/* GET info page.(tension.ejs) */
router.get('/tension', function(req, res, next) {
  res.render('tension', { title: 'Informacion tension' });
});

/* GET info page.(diabetes.ejs) */
router.get('/diabetes', function(req, res, next) {
  res.render('diabetes', { title: 'Informacion diabetes' });
});



module.exports = router;
