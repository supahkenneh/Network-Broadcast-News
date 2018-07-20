const net = require('net');

const PORT = 3005;
const HOST = '0.0.0.0';

const client = new net.Socket();
client.setEncoding('utf8');

client.connect(PORT, HOST, function () {
  console.log('Connected to server');
})

client.on('end', function () {
  console.log('Disconnected from server');
})

client.on('connect', function() {
  process.stdin.pipe(client);
})







