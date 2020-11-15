var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var testAPIRouter = require('./routes/testAPI');
var pathToBuild = '../client/build';

var app = express();

const InitiateMongoServer = require("./config/db");
// Initiate Mongo Server
InitiateMongoServer();

var cors = require("cors");
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, pathToBuild)));

app.use('/user', userRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, pathToBuild + '/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
