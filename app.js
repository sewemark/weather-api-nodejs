const express = require('express');
const request = require('request');
const apiHandler  = require('./apiHandler');
const appConfig = require('./config');

var app = express();

app.get('/weather',function (req,res) {
      if(apiHandler.validateParams(req.query)){
          var params = apiHandler.paraseParams(req.query);
          request(apiHandler.constructUrlForCity(params.city),{json:true},function(err,apiResponse){
              if(err){
                   res.status(400).send('Can not get weather for this location');
              }else{
                  var parsedReponse = apiHandler.parseResponse(apiResponse.body);
                  res.status(200).send(parsedReponse);
              }
          })
      }else{
         res.status(400).send('Bad request, bad query params');
      }
});

app.listen(appConfig.PORT);

module.exports = app;