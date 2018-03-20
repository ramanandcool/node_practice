const yargs = require('yargs');
console.log("starting app.js");
// const fs = require('fs');
// const os = require('os');
const notes = require('./notes.js');
// const _ = require('lodash');
// var user=os.userInfo();
// fs.appendFile('abcd.txt',`hello ${user.username} ! yor are ${notes.age}`);
// console.log(notes.newmethod());
// console.log(notes.add(10,5));
// // console.log(_.isString("hello"));//true if contains string
// // console.log(_.uniq(['ram',10,14,10,21,21,'ram',true,true]));//remove duplicates from array
// // console.log("helloagain");
// var command =process.argv[2]
// console.log(command);
// console.log(process.argv[3]);
const argv=yargs.argv;
// notes.addNote(argv.title,argv.body);
console.log(argv);
