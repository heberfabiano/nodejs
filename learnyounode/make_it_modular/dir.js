module.exports = function(dir_name, file_ext, callback) {

  var err,
      data = [],
      fs = require('fs');

  fs.readdir(dir_name, function (err, list) {

    if (err) {
      return callback(err);
    }

    for (var i = 0; i < list.length; i++) {
      if (list[i].substring(list[i].lastIndexOf('.')) == '.' + file_ext) {
        data.push(list[i]);
      }
    }
    
    return callback(null, data);
  })
}