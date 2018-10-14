var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mprintDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a table named "customers":*/
  var sql = "CREATE TABLE Supplier (name VARCHAR(255), contact_person VARCHAR(255), tel1 VARCHAR(255), tel2 VARCHAR(255), fax VARCHAR(255), email VARCHAR(255), address VARCHAR(500), remarks VARCHAR(255), type VARCHAR(255), isActive VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created, will you believe it?");
  });
});
