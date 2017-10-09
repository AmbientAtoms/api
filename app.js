var http = require('http'),
path = require('path'),
mongoose = require('mongoose');
methods = require('methods'),
express = require('express'),
bodyParser = require('body-parser'),
session = require('express-session'),
errorhandler = require('errorhandler'),
passport = require('passport'),
cors = require('cors')

var app = express();

app.use(cors());

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('method-override')());
app.use(session({ secret: 'thrifa', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

app.use(errorhandler());

mongoose.createConnection('mongodb://localhost/thrifa-test');
mongoose.set('debug', true);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  console.log(err.stack);

  res.status(err.status || 500);

  res.json({'errors': {
    message: err.message,
    error: err
  }});
});

var server = app.listen( process.env.PORT || 3001, function(){
  console.log('Server started at ' + server.address().port);
});
