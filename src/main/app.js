let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let errorHandler = require('./error/handler');
let index = require('./index/index');
let fb = require('./fb/fb-webhook');
                                                                           
let app = express();


// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', index);
app.use('/fb/', fb);

// catch 404 and forward to error handler
app.use(errorHandler.create404);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(errorHandler.sendErrorDev);
}
// production error handler
// no stacktraces leaked to user
app.use(errorHandler.sendErrorProd);


module.exports = app;
