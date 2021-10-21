var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'valisalud'
});

connection.connect(
    (err)=>{
        if (!err) {
            console.log("successful connection");
        }else{
            console.log("Failed connection");
        }
    }
);

module.exports=connection;


