const net = require('net');

const PORT = 3005;
const HOST = '0.0.0.0';

let userList = [];

const server = net.createServer(function (socket) {
  socket.setEncoding('utf8');
  console.log('Client online');

  socket.on('connect', function () {
    userList.push(socket);
    console.log(userList);
  })

  socket.on('end', function(){
    console.log('Server terminated');
  })

  socket.on('data', function(data) {
    let trimmedData = data.toString().trim();
    console.log(trimmedData);
    socket.pipe(socket);
  });

  socket.on('connect', function() {
    process.stdout.pipe(server);
  })
});

server.listen(PORT, HOST, () => {
  console.log(`Now listening on ${HOST}:${PORT}`);
});