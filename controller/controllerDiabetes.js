var db=require('../connection/connection');
var datas = require("../model/glucosa");

module.exports={

       conDiabetes:function(req, res) {

       datas.obtener (db,function(err, results){
            console.log(results);

            res.render('cDiabetes', {title: 'Control de Diabetes', dd:results});

        });
      
       },
        save:function(req, res){
              console.log(req.body);
              datas.into (db,req.body,function(err, results){
      
                     res.redirect("/control_Diabetes");
                 });
       } 


}