module.exports={
    obtener:function (connect,fnction) {
        connect.query("SELECT * FROM registro_diabetes", fnction);
    },
    into:function (connect, sings ,fnction) {
        connect.query("INSERT INTO registro_diabetes (glucosa) VALUES (?)",[sings.glucosa], fnction);
    }
}
