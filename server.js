var express     = require('express'),
    debug       = require('debug')('passport-mongo'),
    app         = require('./app'),
    server      = require('http').Server(app),
    io          = require('socket.io')(server);

//socket.io
require('./socket/socket.main.js')(io);

server.listen(process.env.PORT || 8000,process.env.IP, function() {
  console.log('I\'m Listening...');
  console.log(process.env.IP);
  console.log(process.env.PORT);
})

module.exports = server;