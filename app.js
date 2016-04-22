var express         =   require('express'),
    logger          =   require('morgan'),
    cookieParser    =   require('cookie-parser'),
    bodyParser      =   require('body-parser'),
    expressSession  =   require('express-session'),
    mongoose        =   require('mongoose'),
    hash            =   require('bcrypt-nodejs'),
    path            =   require('path');

var app             =   express(),
    router          =   require('./routes/router'),
    dbConfig        =   require('./config/database');
    passport        =   require('./config/passport');

// serve the public file
app.use(express.static(__dirname + '/build'));
// connect database
mongoose.connect(dbConfig.url);
//passport
app.use(passport.initialize());
app.use(passport.session());

// define middleware
app.use(logger('dev'));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//cookie & session
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

//Cross Origin Request Sharing
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(router);

module.exports = app;