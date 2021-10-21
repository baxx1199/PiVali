var express = require('express');
var router = express.Router();
var db=require('../connection/connection');
const ct = require("../controller/controllerTension");

/* GET control page.(control_tension.ejs) */
  router.get('/',ct.conTension ); 
   router.post('/', ct.save );
  
module.exports = router;
