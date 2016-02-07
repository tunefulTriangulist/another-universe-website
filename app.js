var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
var handlebars = require('express-handlebars').create(
		{
			defaultLayout: 'content',
			helpers: {
				section: function(name, options) {
					if (!this._sections) this._sections = {};
					this._sections[name] = options.fn(this);
					return null;
				}
			}
		}
	);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(favicon(path.join(__dirname, 'public/images/logo.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        /*res.render('error', {
        	layout: null,
        	statusCode: res.status,
            message: err.message,
            error: err
        });*/
    	res.send(err.status, err.stack);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
    	layout: null,
    	statusCode: (err.status || 500),
        message: err.message,
        error: {}
    });
	//res.send(err.status, err.stack);
});


module.exports = app;
