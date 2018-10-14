var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mprintDB"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE Account SET PASSWORD = 'zzzz' WHERE name = 'account1'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
