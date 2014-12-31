var http = require('http')
var url = require('url')
var querystring = require('querystring')
var port = process.argv[2]
var enpointBase = '/api/'

var server = http.createServer(function(req, res) {
  var urlData = url.parse(req.url, true);
  switch (urlData.pathname) {
    case enpointBase + 'parsetime':
      if (urlData.query === undefined) {
        console.log("oops, you didn't provide a query");
      }

      var date = new Date(urlData.query.iso)
      console.log(JSON.parse('{' + "hour:" + date.getHours() + ',' + '"minute:"' + date.getMinutes() + date.getSeconds() + '}' ));


      break;
    case enpointBase + 'unixtime':
      console.log(urlData.pathname);
      break;
    default:
      console.log("you are not one for the time, are you?");
  }
});

server.listen(port)
