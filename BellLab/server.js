//basic server response example zone
console.log("Hi there, from server :)");

//express and bodyParser additional
var express = require('express');
var bodyParser= require('body-parser')
var app = express();
//open channel communication
app.listen(3000, function() {
  console.log('listening on 3000')
})
//interaction with html
/* app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/supplier/addSupplier.html')
})
app.use(bodyParser.urlencoded({extended: true}))
*/

// connect database zone option:1 directly
var mysql = require('mysql');
//connect database zone option:2 via config.js file
var config = require('./config.js')
var dbConfig = {
    host:      config.database.host,
    user:       config.database.user,
    password: config.database.password,
    port:       config.database.port,
    database: config.database.db
}

var myConnection  = require('express-myconnection')
app.use(myConnection(mysql, dbConfig, 'pool'))

//using another js
var viewSup = require('./routes/index.js');
app.route('./routes/index.js');

var supplier = require('./routes/supplier.js');
app.route('./routes/supplier.js');

//using method
var methodOverride = require('method-override')
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))
