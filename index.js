var express = require('express');
var layouts = require('express-ejs-layouts');
var parser = require('body-parser');
require('dotenv').config();

var app = express();

app.set('view engine', 'ejs')

app.use(layouts);
app.use(express.static('static'));
//app.use(parser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.render('index.ejs');
  });


// Listen on PORT 3000
app.listen(3000, function(){
	console.log('I\'m listening on port 3000');
  });
  