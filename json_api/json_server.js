var http = require('http')
var url = require('url')
var date = new Date()
var port = process.argv[2]

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
});

server.listen(port)
