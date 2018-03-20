// const js = require('js');
const fs = require('fs');
var originalNote={
  title:"some title",
  body: "some  body"
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("newfile.json",originalNoteString);//content saved on file

var noteSring=fs.readFileSync("newfile.json");
var note =JSON.parse(noteSring);
console.log(typeof note);
console.log(note.title);
