// use express to create our app
var express = require('express');
var app = express();
var server = require('./lib/servers');
var port = process.env.PORT || 5000;
server().listen(port);
console.log('second working stage');
console.log('working with on port ' + port);
console.log(name, 'listening on port', port);
console.log('hello');
// use body-parser to parse incoming requests
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use morgan to log requests to the console
var morgan = require('morgan');
app.use(morgan('dev'));
// use the passport middleware to authenticate requests
var passport = require('passport');
app.use(passport.initialize());
// use the passport middleware to authenticate requests
var passport = require('passport');
app.use(passport.initialize());
// use the passport middleware to authenticate requests
var passport = require('passport');