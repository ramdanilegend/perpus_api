var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const homeRouter = require('./routes/home');
const userRouter = require('./routes/user');
const booksRouter = require('./routes/books');
const orderRouter = require('./routes/order');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

var Books = require("./models/books");
var User = require("./models/user");
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRouter);
app.use('/user', userRouter);
app.use('/books', booksRouter);
app.use('/order', orderRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;