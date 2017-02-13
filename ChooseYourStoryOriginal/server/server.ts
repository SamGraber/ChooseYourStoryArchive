import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as htmlRenderer from 'ejs';

import { router } from './routes/serveApp';

export interface IHttpError extends Error {
	status: number;
} 

export const app: express.Express = express();

// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', htmlRenderer.renderFile);
app.set('view engine', 'html');

// app.use(favicon(__dirname.replace('server', '') + '/assets/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/node_modules', express.static('node_modules'));
app.use('/systemjs.config.js', express.static('systemjs.config.js'));
app.use('/assets', express.static('assets'));
app.use('/source', express.static('source'));

// routes needs to be last since we * all empty routes to the index file
app.use('/', router);

/// catch 404 and forwarding to error handler
app.use((request: express.Request, response: express.Response, next: express.NextFunction): void => {
    const error: IHttpError = <IHttpError>new Error('Not Found');
    error.status = 404;
    next(error);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((error: IHttpError, request: express.Request, response: express.Response): void => {
        response.status(error.status || 500);
		console.log(error.message);
		console.log(error);
        response.render('error.html');
    });
}

// production error handler
// no stacktraces leaked to user
app.use((error: IHttpError, request: express.Request, response: express.Response): void => {
    response.status(error.status || 500);
	console.log(error.message);
    response.render('error.html');
});
