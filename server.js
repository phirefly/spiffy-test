var express = require('express');
var app = express();
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.render('index', { title : 'Home' });
});

app.listen(5000, function(){
  console.log("Express server listening on port 5000");
});

