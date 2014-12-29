var http = require('http')
var fs = require('fs')
var bl = require('bl')
var date = new Date();
var socket = process.argv[2]
var fileToServe = process.argv[3]

var server = http.createServer(function (req, res) {
  fs.createReadStream(fileToServe).pipe(res)
});

server.listen(socket)
