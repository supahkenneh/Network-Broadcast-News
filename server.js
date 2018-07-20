const net = require('net');

const PORT = 3005;
const HOST = '0.0.0.0';

let userList = [];

const server = net.createServer(function (socket) {

  userList.push(socket);
  console.log('Client online');

  socket.on('end', function () {
    let exitingUser = userList.indexOf(socket);
    userList.splice(exitingUser, 1);
    console.log('Client logout');
  })

  socket.on('data', function (data) {
    broadcast(data, socket);
    console.log(data.toString().trim());
  })

  function broadcast(message, sender) {
    userList.forEach(user => {
      if (user !== sender) {
        user.write(message);
        process.stdout.write(message);
      }
    })
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Now listening on ${HOST}:${PORT}`);
});