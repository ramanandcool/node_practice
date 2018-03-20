const express = require('express');
const hbs = require('hbs');
var app=express();
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');
app.get('/about',(req,res)=>{
                              res.render('about.hbs',{pageTitle:'About Page',
                                                      currentYear:new Date().getFullYear()})
                            });
app.listen(8080);
