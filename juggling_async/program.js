"use strict";
var http = require('http');
var _ = require('underscore');
var bl = require('bl');

var urls = process.argv.slice(2);

// var urls = ['http://example.com', 'http://google.com'];

function getURLsAsync(urls) {
  for (var i = 0; i < urls.length; i++) {
    http.get(urls[i], function(res) {
      res.on('data', function(chunk){
        console.log(chunk);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });

  }
}

getURLsAsync(urls);
