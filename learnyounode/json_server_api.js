var
  http = require('http'),
  url = require('url'),
  port = process.argv[2];

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (request, response) {
  var url_param = url.parse(request.url, true),
      time = new Date(url_param.query.iso),
      data;

  if (url_param.pathname == '/api/parsetime') {
    result = parsetime(time);
  } else if (url_param.pathname == '/api/unixtime') {
    result = unixtime(time);
  }

  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
})
server.listen(port);
