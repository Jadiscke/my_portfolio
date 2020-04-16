//jshint esversion:6


//Settings
const express = require('express');
const app = express();
const https = require('https');

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));



// Main Page
app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
  console.log("I'm Working!");
});


// Server Listen
app.listen(process.env.PORT || 3000, function(){
  console.log('I can listen to you!');
});
