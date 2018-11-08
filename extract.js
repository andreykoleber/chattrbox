/*global require, module, console*/
var path = require('path');

var extractFilePath = function (url) {
  'use strict';
  var filePath,
    fileName = 'index.html';

  if (url.length > 1) {
    fileName = url.substring(1);
  }

  console.log('The fileName is: ' + fileName);

  filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
};

module.exports = extractFilePath;
