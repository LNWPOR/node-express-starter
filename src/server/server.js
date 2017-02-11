import express     	from 'express';
import { Server }	from 'http';
import SocketIO 	from 'socket.io'; 
import app         	from './app';

let server      = Server(app);
let port 		= process.env.PORT || 8000;
let ip 			= process.env.IP;

//socket.io
let io          = new SocketIO(server);
import socketMain from './socket/socket.main.js';
socketMain(io);

server.listen(port, ip, () => {
  console.log(`Listening on PORT:${port} IP:${ip}`);
});