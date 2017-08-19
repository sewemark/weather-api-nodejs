const validators = require('./validators');
const appConfig = require('./config');

var ids = new Array();
ids['londyn']=2643743;
ids['newyork'] = 5128638;

function validateParams(params) {
    return validators.validateCity(params.city) && validators.validateEmail(params.email);
}

function parseResponse(body) {
    return{
        description:body.weather[0].description,
        main:body.weather[0].main,
        temp:body.main.temp,
        pressure:body.main.pressure,
        humidity:body.main.humidity,
        visibility:body.visibility,
        wind:body.wind
    }
}

function getCityId(city) {
    return ids[city];
}

function constructUrlForCity(city) {
    return 'http://samples.openweathermap.org/data/2.5/weather?id=' + getCityId(city) +'&APPID=' + appConfig.APP_KEY;
}

function paraseParams(params) {
    return {
        city:params.city.replace(/ /g,'').toLowerCase(),
        email :params.email.trim()
    }
}

module.exports = {
    paraseParams:paraseParams,
    constructUrlForCity:constructUrlForCity,
    parseResponse:parseResponse,
    validateParams:validateParams
};