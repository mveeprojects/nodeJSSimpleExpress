var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirnmame + '/index.html');
})

app.get('/process', function(req, res){
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log('example app listening on http://%s:%s', host, port)
})
