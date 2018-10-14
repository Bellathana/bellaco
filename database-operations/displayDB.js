var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mprintDB"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Account", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
