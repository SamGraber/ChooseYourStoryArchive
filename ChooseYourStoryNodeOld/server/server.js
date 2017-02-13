"use strict";
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var htmlRenderer = require('ejs');
var serveApp_1 = require('./routes/serveApp');
exports.app = express();
// view engine setup
exports.app.set('views', __dirname + '/views');
exports.app.engine('html', htmlRenderer.renderFile);
exports.app.set('view engine', 'html');
// app.use(favicon(__dirname.replace('server', '') + '/assets/favicon.ico'));
exports.app.use(logger('dev'));
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: false }));
exports.app.use(cookieParser());
exports.app.use('/node_modules', express.static('node_modules'));
exports.app.use('/systemjs.config.js', express.static('systemjs.config.js'));
exports.app.use('/assets', express.static('assets'));
exports.app.use('/source', express.static('source'));
// routes needs to be last since we * all empty routes to the index file
exports.app.use('/', serveApp_1.router);
/// catch 404 and forwarding to error handler
exports.app.use(function (request, response, next) {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});
/// error handlers
// development error handler
// will print stacktrace
if (exports.app.get('env') === 'development') {
    exports.app.use(function (error, request, response) {
        response.status(error.status || 500);
        console.log(error.message);
        console.log(error);
        response.render('error.html');
    });
}
// production error handler
// no stacktraces leaked to user
exports.app.use(function (error, request, response) {
    response.status(error.status || 500);
    console.log(error.message);
    response.render('error.html');
});
//# sourceMappingURL=server.js.map