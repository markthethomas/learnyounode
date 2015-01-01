var http = require('http')
var url = require('url')
var port = process.argv[2]
var enpointBase = '/api/'

var server = http.createServer(function(req, res) {
  var urlData = url.parse(req.url, true);
  switch (urlData.pathname) {
    case enpointBase + 'parsetime':
      if (urlData.query === undefined) {
        console.log("oops, you didn't provide a query");
      }
      var date = (new Date(urlData.query.iso));
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}));
      res.end()
      break;
    case enpointBase + 'unixtime':
      if (urlData.query === undefined) {
        console.log("oops, you didn't provide a query");
      }
      var unixDate = (new Date(urlData.query.iso));
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify({unixtime: unixDate.getTime()}));
      res.end()
      break;
    default:
      console.log("you are not one for the time, are you?");
  }
});
server.listen(port)
