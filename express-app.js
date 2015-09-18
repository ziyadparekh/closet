var version = process.env.API_VERSION;

//module dependencies
var ensureLoggedIn  = require('connect-ensure-login').ensureLoggedIn;
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var errorHandler = require('errorHandler');
var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var swig = require('swig');

var app = express();

//Routes & API
var index = require('./application/routes/index');

process.on('uncaughtException', function(err){
    console.log(err);
    process.exit(0);
});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(errorHandler({ showStack: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.PORT){
    app.use(morgan('combined'));
}else{
    app.use(morgan('combined'));
    app.use(errorHandler({ dumpExceptions: false, showStack: false }));
}

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/status', function (req, res, next) {
    res.json({
        "status" : "success"
    }, 200);
});

//routes
app.get('/login', index.login);
//status
app.get('/', index.index);

module.exports = app;
//app.listen(process.env.PORT || 3010);