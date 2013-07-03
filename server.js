var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib');

var app = express();
app.set('view engine', 'jade');
app.use("/stylesheets", express.static(__dirname + '/stylesheets'));

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}

app.use(stylus.middleware({
    src: __dirname
  , compile: compile
}));

app.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.render('index', { title : 'Home' });
});

app.listen(5000, function(){
  console.log("Express server listening on port 5000");
});

