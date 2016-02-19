var fs = require('fs');

fs.readdir(process.argv[2], function (err, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].substring(list[i].lastIndexOf('.')) == '.' + process.argv[3]) {
      console.log(list[i]);
    }
  }
})

/*
Usando 'path'

var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})
*/