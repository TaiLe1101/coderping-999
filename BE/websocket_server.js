/* eslint-disable no-unused-vars */

require('dotenv').config();

const { Server } = require('socket.io');
const ioServer = new Server();

ioServer.on('connection', (socket) => {
  console.log('Server connected...');
  socket.on('/', (data) => {
    console.log(data);
  });
});

const WEBSOCKET_SERVER_PORT = process.env.WEBSOCKET_SERVER_PORT || 3001;
ioServer.listen(WEBSOCKET_SERVER_PORT, () => {
  console.log(`🔵 Websocket server listening on port ${WEBSOCKET_SERVER_PORT}`);
});

module.exports = ioServer;
