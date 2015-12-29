// dependencies
var express         = require('express'),
    logger          = require('morgan'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    expressSession  = require('express-session'),
    mongoose        = require('mongoose'),
    hash            = require('bcrypt-nodejs'),
    path            = require('path'),
    passport        = require('passport'),
    localStrategy   = require('passport-local' ).Strategy;

mongoose.connect('mongodb://localhost:27017/lnwtodoapp');

// user schema/model
var User = require('./models/user');

// create instance of express
var app = express();

// define middleware
app.use(logger('dev'));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Cross Origin Request Sharing
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// require routes
var routes = require('./routes/api');
// routes
app.use('/api', routes);

module.exports = app;