// *** Import modules
const http = require('http');
const _ = require('lodash/fp');
const express = require('express');
const socket = require('socket.io');

// *** Initialize instances
const app = express();
const httpServer = http.createServer(app);
const io = new socket.Server(httpServer);

// *** Main
require('dotenv').config();

io.on('connection', (socket) => {
  console.log(socket);
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`🦥 Listening on port ${PORT}`));
