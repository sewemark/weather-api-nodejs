function validateCity(city) {
    return typeof city != 'undefined' && city != null   && (city.trim().toLowerCase()==="londyn" || city.trim().replace(/ /g,'').toLowerCase() ==='newyork');
}

function validateEmail(email) {
    var reqex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return  typeof email != 'undefined' && email != null  && reqex.test(email);
}

module.exports ={
    validateCity:validateCity,
    validateEmail:validateEmail
}