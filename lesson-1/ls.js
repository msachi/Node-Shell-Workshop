#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let directory = process.cwd();
let flag = process.argv[2];
let extension = process.argv[3];

fs.readdir(directory, 'utf-8', function(error, files){
  if (flag == '-ex') files = files.filter(file => file.split('.')[1] == extension);
  if (error) console.log(error);
  console.log(files.join(' '));
});
