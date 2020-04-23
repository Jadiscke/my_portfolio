//jshint esversion:6


//Settings
const express = require('express');
const app = express();
const https = require('https');



app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));



// Main Page
app.get('/', function(req,res) {
  res.render('index');
});


// Server Listen
app.listen(process.env.PORT || 3000, function(){
  console.log('I can listen to you!');
});
