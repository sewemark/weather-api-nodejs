const express = require('express');
const request = require('request');

var app = express();

const PORT =3000;
const APP_KEY = '5c981cf4fd4cefdf6a38cf7118441aaa';

function validateCity(city) {
   return typeof city != 'undefined' && city.trim().toLowerCase()==="londyn" || city.trim().replace(/ /g,'').toLowerCase() ==='newyork';
}

function validateEmail(email) {
    var reqex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return  typeof email != 'undefined' && reqex.test(email);
}

function paramsValidator(params) {
    return validateCity(params.city) && validateEmail(params.email);
}

function parseResponse(body) {
    return{
        description:body.weather[0].description,
        main:body.weather[0].main,
        temp:body.main.temp,
        pressure:body.main.pressure,
        humidity:body.main.humidity,
        visibility:body.visibility,
        wind:body.wind,
    }
}

function getCityId(city) {
    var ids = new Array();
    ids['londyn']=2643743;
    ids['newyork'] = 5128638;
    return ids[city];
}

function constructUrlForCity(city) {
    return 'http://samples.openweathermap.org/data/2.5/weather?id=' + getCityId(city) +'&APPID=' + APP_KEY;
}

function paraseParams(params) {
    return {
        city:params.city.replace(/ /g,'').toLowerCase(),
        email :params.email.trim()
    }
}

app.get('/weather',function (req,res) {

      if(paramsValidator(req.query)){
          var params = paraseParams(req.query);
          request(constructUrlForCity(params.city),{json:true},function(err,apiResponse){
              if(err){
                   res.status(400).send('Can not get weather for this location');
              }else{
                  var parsedReponse = parseResponse(apiResponse.body);
                  res.status(200).send(parsedReponse);
              }
          })
      }else{
         res.status(400).send('Bad request, bad query params');
      }
});

app.listen(PORT);