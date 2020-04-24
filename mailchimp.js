https = require('https');
require('dotenv').config();

exports.send = function (email,fullName,message){
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fullName,
          MESSAGE: message

        }
      }
    ]
  }

  const jsonData = JSON.stringify(data);
  let mailChimpData = '';
  let statusCode = 0;
  let arrAuth = [];
  //Setting API response
  //load API Authentication


  const url = process.env.URL_TO_SEND;
  const apiKey = process.env.API_KEY;


  const options = {
    method: 'POST',
    auth: "jadiscke1:"+apiKey
  }


  const request = https.request(url,options, function(response){
    response.on('data',function(data){
      mailChimpData = JSON.parse(data);
      console.log(mailChimpData);
    });


    response.on('error',function(e){
      console.error(e);
    })
    // return true if there is no erro no the request
    response.on('end', function(){
      statusCode = response.statusCode;
      console.log(statusCode);
      console.log('response ended!');
      if (mailChimpData.error_count > 0 || statusCode !== 200){
        return false
      }else {
        return true
      }
    });
  });


  request.write(jsonData);
  request.end();

}
