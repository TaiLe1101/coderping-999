/* eslint-disable no-unused-vars */

require('dotenv').config();

const ioClient = require('./websocket_client');
const ioServer = require('./websocket_server');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.DEVELOPMENT) app.use(require('morgan')('common'));
// app.use(require('cors'));

app.get('/', (req, res) => {
  ioClient.emit('/', req.body);
  res.status(200).send('OK...');
});

const SERVER_PORT = process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => {
  console.log(`🟢 Server listening on port ${SERVER_PORT}`);
});
