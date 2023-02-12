var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "91416602bR@"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

function logar(){
    con.query("select email, senha from usuario where email = " + document.getElementById('user') + " and senha = " + document.getElementById('pass'), function (err, result, fields) {
        if (err) alert(err);
        console.log(result);
        });

}