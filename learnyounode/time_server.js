var
  net = require('net'),
  port = process.argv[2];

function leftPad(number, targetLength) {
  var output = number + '';
  while (output.length < targetLength) {
      output = '0' + output
  }
  return output;
}

var server = net.createServer(function (socket) {
  var
    date = new Date(),
    data = date.getFullYear() + '-' +
           leftPad(date.getMonth() + 1, 2) + '-' +
           leftPad(date.getDate() + 1, 2) + ' ' +
           leftPad(date.getHours() + 1, 2) + ':' +
           leftPad(date.getMinutes() + 1, 2) + '\n';

  socket.write(data);
  socket.end();
})
server.listen(port);