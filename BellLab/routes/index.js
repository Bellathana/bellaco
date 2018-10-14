var express = require('express')
var app = express()

var viewSql = 'SELECT * FROM Supplier ORDER BY name desc'

app.get('/viewSup', function(req, res){
  //res.render('/viewSup', {title: 'My Node.js Application'})
	//res.sendFile(__dirname + '/supplier/viewSupplier.html')
  res.send('index on');

  app.listen( (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
  console.log('server response');
  })
})

module.exports = app;
