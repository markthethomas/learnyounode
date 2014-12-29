var net = require('net');
var port = process.argv[2]
var server = net.createServer(function(socket) {
  var date = new Date();
  var hourOfDay = ('0' + date.getHours()).slice(-2);
  var minutesOfDay = ('0' + date.getMinutes()).slice(-2);
  socket.write(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getUTCDate() + ' ' + hourOfDay + ':' + minutesOfDay);
  socket.end();
});

server.listen(port)
