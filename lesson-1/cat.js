#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let file = process.argv[2];

fs.readFile(file, 'utf-8', function(error, file) {
  if (error) console.log(error);
  console.log(file);
});
