/*
var http = require('http');
var urls = process.argv.slice(2, 5);
var responses = [];
var count = urls.length;

printResponses = function() {
  if (--count > 0) {
    return;
  }
  console.log(responses.join('\n'));
}

for (var i = 0; i < urls.length; i++) {
  http.get(urls[i], function (response) {
    var dataFull = [];
    response.setEncoding('utf8');
    response.on("data", function (data) {
      dataFull.push(data);
    })
    response.on("end", function() {
      responses[i] = dataFull.join('');
      printResponses();
    })
  })
}
*/

var
  http = require('http'),
  urls = process.argv.slice(2),
  count = urls.length,
  responses = [];

  printResponses = function() {
    if(--count > 0) return;
    console.log(responses.join('\n'));
  };

for(var i=0; i < urls.length; i++) {
  setImmediate(function(position) {
    http.get(urls[position], function(response){
      var data = [];
      response.setEncoding('utf8');
      response.on('data', function(string){
        data.push(string);
      });
      response.on('end', function(){
        responses[position] = data.join('');
        printResponses();
      });
    });
  }, i);
}