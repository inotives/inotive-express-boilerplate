// package declaration ---------------------------------------------------------------------
var express = require('express'),
app = express();

var bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
path = require('path'),
favicon = require('serve-favicon'),
logger = require('morgan');

var config = require('./config');

// third-party middleware -------------------------------------------------------------------
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// setup favicon
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));

// custom middleware ------------------------------------------------------------------------


// route function ---------------------------------------------------------------------------

// declare the route file
var index = require('./routes/index');
var about = require('./routes/about');

// apply the routes to routefile
app.use('/', index);
app.use('/about', about);


// catch 404 and forward to error handler ------------------
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
// development error handler
// will print stacktrace
if (app.get('env') !== 'production') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



app.listen(config.express.port, function(){
  console.log('application is listening on port::' + config.express.port);
});
