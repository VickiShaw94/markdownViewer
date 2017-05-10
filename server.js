//server.js
//
//1.0.0


var express = require('express');
var app = express();

//set view engine to ejs
app.set('view engine', 'ejs');

//public folder to store assets
app.use(express.static(__dirname + '/public'));

//routes for app
app.get('/', function(req, res) {
    res.render('pad');
});

//routes for app
app.get('/:id)', function(req, res) {
    res.render('pad');
});

//get sharejs dependencies
var sharejs = require('share');
require('redis');

//options for sharejs
var options = {
    db: {type: 'redis'},
};

//attach express server to sharejs
sharejs.server.attach(app.options);

//listen on port 8000 (for localhost) or port defined for heroku
var port = process.env.PORT || 8000;
app.listen(port);


