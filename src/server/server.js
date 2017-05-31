import { Server } from 'http';
import SocketIO from 'socket.io';
import app from './app';
import socketMain from './socket/socket.main';

const server = Server(app);
const port = process.env.PORT || 8000;
const ip = process.env.IP;
// socket.io
const io = new SocketIO(server);
socketMain(io);

server.listen(port, ip, () => {
  console.log(`Listening on PORT:${port} IP:${ip}`);
});