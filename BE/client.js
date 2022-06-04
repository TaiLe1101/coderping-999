/* eslint-disable no-unused-vars */

require('dotenv').config();

const socketClient = require('socket.io-client');
const express = require('express');

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const ioClient = socketClient.connect(`http://localhost:${SERVER_PORT}`);

ioClient.on('connect', (socket) => {
  console.log('Client connected...');
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.DEVELOPMENT) app.use(require('morgan')('common'));
// app.use(require('cors'));

app.get('/', (req, res) => {
  ioClient.emit('/', req.body);
  res.status(200).send('OK...');
});

const CLIENT_PORT = process.env.CLIENT_PORT || 3001;
app.listen(CLIENT_PORT, () => {
  console.log(`🟢 Client listening on port ${CLIENT_PORT}`);
});
