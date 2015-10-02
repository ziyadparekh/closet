var version = process.env.API_VERSION;

//module dependencies
var ensureLoggedIn  = require('connect-ensure-login').ensureLoggedIn;
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var errorHandler    = require('errorHandler');
var bodyParser      = require('body-parser');
var express         = require('express');
var morgan          = require('morgan');
var path            = require('path');
var swig            = require('swig');
var _               = require('underscore');

var app = express();

var sessionOptions = {
  maxAge: 3600 * 1000 * 24 * 31,
  secret: 't2obo2!',
  resave: true,
  saveUninitialized: true,
  cookie: {
    domain: '.closet.co',
    maxAge: 3600 * 1000 * 24 * 31
  }
};

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

if (process.env.PORT) {
    app.use(morgan('combined'));
    // TODO:: extend redis store for sessions on prod
    app.use(session(sessionOptions));
} else {
    app.use(morgan('combined'));
    app.use(errorHandler({ dumpExceptions: false, showStack: false }));
    app.use(session(sessionOptions));
}

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/status', function (req, res) {
    res.json({
        "status" : "success"
    }, 200);
});

//routes
app.get('/login', index.login);

app.post('/login', index.loginUser);

//status
app.get('/', index.index);

module.exports = app;