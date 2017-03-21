#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let readFile = path.join(process.cwd(), process.argv[2]);
let redirect = process.argv[3];
let writeFile = path.join(process.cwd(), process.argv[4]);

if (redirect == '>') {
  var readStream = fs.createReadStream(readFile, 'utf-8');
  var writeStream = fs.createWriteStream(writeFile);
  // EITHER
  readStream.pipe(writeStream);
  // OR
  // readStream.on('data', function(chunk) {
  //   console.log(chunk);
  //   writeStream.write(chunk);
  // });
}
else {
  var readStream = fs.createReadStream(readFile);
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
}
