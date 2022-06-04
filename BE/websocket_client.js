/* eslint-disable no-unused-vars */

require('dotenv').config();

const { connect } = require('socket.io-client');

const HOST = process.env.HOST || 'http://localhost';
const WEBSOCKET_SERVER_PORT = process.env.WEBSOCKET_SERVER_PORT || 3001;
const ioClient = connect(`${HOST}:${WEBSOCKET_SERVER_PORT}`);

ioClient.on('connect', (socket) => {
  console.log('Client connected...');
});

module.exports = ioClient;
