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
  var sql = "CREATE TABLE Supplier (supplierID INT(NOT NULL), addressID NT(NOT NULL), contactID INT(NOT NULL), addressTypeID INT(NOT NULL), name VARCHAR(50), dateAdded dateTime)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created, will you believe it?");
  });
});
