var http = require('http')
var port = process.argv[2]
var stream = require('stream');
var date = new Date()

var server = http.createServer(function(req, res) {
  var uppercase = new stream.Transform();
  uppercase._transform = function (data, enc, cb) {
    cb(null, data.toString().toUpperCase());
  };
  req.pipe(uppercase).pipe(res);
})

server.listen(port)
