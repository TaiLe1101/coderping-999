/* eslint-disable no-unused-vars */

require('dotenv').config();

const socketServer = require('socket.io');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const ioServer = new socketServer.Server(server);

ioServer.on('connection', (socket) => {
  console.log('Server connected...');
  socket.on('/', (data) => {
    console.log(data);
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.DEVELOPMENT) app.use(require('morgan')('common'));
// app.use(require('cors'));

app.get('/', (req, res) => {
  res.status(200).send('OK...');
});

const SERVER_PORT = process.env.SERVER_PORT || 3000;
server.listen(SERVER_PORT, () => {
  console.log(`🔵 Server listening on port ${SERVER_PORT}`);
});
