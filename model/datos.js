module.exports={
    obtener:function (connect,fnction) {
        connect.query("SELECT * FROM registro_tension", fnction);
    },
    into:function (connect, sings,fnction) {
        connect.query("INSERT INTO registro_tension (presion_diastolica, presion_sistolica) VALUES (?,?)",[sings.dis, sings.sis], fnction);
    }
}
