var http = require('http')
var bl = require('bl')
var results = []
var count = 0

var urls = process.argv.slice(2)

function printResults() {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

function httpGET(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.log(err);
      results[index] = data.toString()
      count++

      if (count === urls.length) {
        printResults();
      }
    }))
  })
}


for (var i = 0; i < urls.length; i++) {
  httpGET(i);
}
