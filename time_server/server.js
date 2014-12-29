var net = require('net');

var port = process.argv[2]

var server = net.createServer(function (socket) {
  console.log('client connected');
  socket.on('end', function() {
    console.log('client disconnected');
  });
});


server.listen(port)
