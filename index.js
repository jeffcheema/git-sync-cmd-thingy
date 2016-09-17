#!/usr/bin/env node
 var co = require('co');
 var prompt = require('co-prompt');
  var program = require('commander');
  var ssh = require('simple-ssh');
var exec = require('ssh-exec')
var config = require('./config.json');
var fs = require("fs");

  program
  .action(function(dir) {
    var content = fs.readFileSync("config.json");
  var config = JSON.parse(content);

    var exec = require('child_process').exec;
fil = config.root+dir;
var cmd = "ssh "+config.user_name+"@"+config.server_name+" 'cd "+fil+" && git merge'" ;




exec(cmd, function(error, stdout, stderr) {
  console.log(stdout)
  if (error == null){

  }
  else{
    console.log(error)
  }
  console.log(stderr)
});


 })
   .parse(process.argv);
