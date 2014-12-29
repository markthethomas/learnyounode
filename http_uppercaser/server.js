var http = require('http')
var port = process.argv[2]

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.on('data', function(chunk) {
      transformedChunk = chunk.toString().toUpperCase()
    }).pipe(res);
  } else {
    console.log('You have failed to comply with our stringent demands');
    return false
  }
})

server.listen(port)
