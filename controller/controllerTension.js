var db=require('../connection/connection');
var datas = require("../model/datos");

module.exports={

       conTension:function(req, res) {

       datas.obtener (db,function(err, results){
            console.log(results);

            res.render('cTension', {title: 'Control de tension', dt:results});

        });
      
       },
        save:function(req, res){
              console.log(req.body);
              datas.into (db,req.body,function(err, results){
      
                     res.redirect("/control_Tension");
                 });
       }

       
}
