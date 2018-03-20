const express = require('express');
var app=express();
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  res.send('Hello Ram');
});
app.get('/about',function (req,res) {
  res.send('aboutpage');

});
app.get('/bad',(req,res)=>{
  res.send({errorname:"DefaultError",
des:"hello"})});

app.listen(8080);
