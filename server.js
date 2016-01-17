#!/usr/bin/env node

var debug = require('debug')('passport-mongo'),
    app = require('./app'),
    http = require('http').Server(app),
    io = require('socket.io')(http);

// io.on('connection', function(socket){
//   console.log('user connected');
//   socket.on('disconnect',function(){
//     console.log('user disconnected');
//   });
  
//   socket.on('sendComment',function(description,res_id,username) {
//     io.sockets.emit('getComment',description,res_id,username);
//   });
  
//   socket.on('sendRate',function(rate,res_id,username) {
//     io.sockets.emit('getRate',rate,res_id,username);
//   });
// });

http.listen(process.env.PORT || 8000,process.env.IP, function() {
  console.log('I\'m Listening...');
  console.log(process.env.IP);
  console.log(process.env.PORT);
})