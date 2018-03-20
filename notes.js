console.log('i am notes.js ');
// // console.log(module);
// module.exports.newmethod=() =>{
//     console.log('i am method inside notes');
//     return 'hello Ram';
//   };
  // module.exports.add=(a,b)=>{return a+b;};
var addNote= (title,body)=>{
  console.log('Adding note',title,body);
}
module.exports={
  addNote
}
