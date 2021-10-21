var express = require('express');
var router = express.Router();
var db=require('../connection/connection');
const ct = require("../controller/controllerDiabetes");

/* GET control page.(control_tension.ejs) */
  router.get('/',ct.conDiabetes ); 
   router.post('/', ct.save );
  
module.exports = router;
