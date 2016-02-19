var http = require('http');
var url = process.argv[2];
var dataFull = '';

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.on("data", function (data) {
    dataFull += data;
  })
  response.on("end", function() {
    console.log(dataFull.length);
    console.log(dataFull);
  })
  /* Alternativa
  response.on("data", console.log);
  response.on("error", console.error);
  */
})