var express = require('express')
var app = express()

var addSql = "INSERT INTO Supplier (name) VALUES (name)";

app.post('/addSup', (req, res) => {
	console.log('client has submitted a form')
  console.log(req.body)

var inputSupplier = {
	name: req.sanitize('name').escape().trim(),
	cperson: req.sanitize('contact_person').escape().trim(),
	tel1: req.sanitize('tel1').escape().trim(),
	tel2: req.sanitize('tel2').escape().trim(),
	fax: req.sanitize('fax').escape().trim(),
	email: req.sanitize('email').escape().trim(),
	address: req.sanitize('address').escape().trim(),
	remarks: req.sanitize('remarks').escape().trim(),
	status: req.sanitize('status').escape().trim()
}

req.getConnection(function(error, conn){
	conn.query(addSql);
})
	//console.log('supplier.js reseponse!, and you got: ',supplierName)
  //res.send(supplierName);
  console.log(supplierName,cperson,tel1,tel2,fax,email,address,remarks,status)
});

module.exports = addSql;
