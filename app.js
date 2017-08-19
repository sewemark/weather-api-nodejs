var express = require('express');
var app = express();
const port =3000;

function validateCity(city) {
   return typeof city != 'undefined' && city.trim().toLowerCase()==="londyn" || city.trim().toLowerCase() ==='newyork';
}

function validateEmail(email) {
    var reqex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return  typeof email != 'undefined' && reqex.test(email);
}

function paramsValidator(params) {
    return validateCity(params.city) && validateEmail(params.email);
}

app.get('/weather',function (req,res) {
      if(paramsValidator(req.query)){
         res.status(200).send('Query params ok')
      }else{
         res.status(400).send('Bad request, bad query params');
      }
});

app.listen(port);