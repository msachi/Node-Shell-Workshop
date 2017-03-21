#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let file = process.argv[2];

var readStream = fs.createReadStream(path.join(process.cwd(), file));
var fileContent = '';

readStream.on('data', function(chunk) {
  fileContent += chunk;
})

readStream.on('error', function(err) {
  console.log(error);
})

readStream.on('end', function() {
  console.log(fileContent);
})
