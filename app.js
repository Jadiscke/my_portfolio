//jshint esversion:6


//Settings
const express = require('express');
const app = express();
const https = require('https');



app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

let messageStatus = false;

// Main Page
app.get('/', function(req,res) {
  res.render('index',{
    messageStatus: messageStatus
  });
});

app.post('/', function(req,res){
  console.log(req.body);
  let bodyMessage = req.body;
  if (bodyMessage.fullName !== "" && bodyMessage.contactEmail !== ""){
    messageStatus = true;
  }
  res.redirect('/#contact');
});


// Server Listen
app.listen(process.env.PORT || 3000, function(){
  console.log('I can listen to you!');
});
