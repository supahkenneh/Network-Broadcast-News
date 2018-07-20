const net = require('net');

const PORT = 3005;
const HOST = '0.0.0.0';

const client = new net.Socket();

client.connect(PORT, HOST, function () {
  client.write('connected to: ' + HOST + ':' + PORT)
  // console.log('Connected to server');
})

client.on('data', function(data) {
  console.log(data.toString().trim());
})

client.on('end', function () {
  console.log('Disconnected from server');
})

process.stdin.pipe(client);
  






