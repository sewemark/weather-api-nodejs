
const expect = require('chai').expect
const validators = require('./validators');


describe('email validator test', function () {
    it('validating undefined email should return false', function * () {
        var expectedValue = validators.validateEmail(undefined);
        expect(expectedValue).to.eql(false);
    });

    it('validating empty email should return false', function * () {
        var expectedValue = validators.validateEmail();
        expect(expectedValue).to.eql(false);
    });

    it('validating null email should return false', function * () {
        var expectedValue = validators.validateEmail(null);
        expect(expectedValue).to.eql(false);
    });

    it('validating not proper email should return false', function * () {
        var expectedValue = validators.validateEmail("email@@email.pl");
        expect(expectedValue).to.eql(false);
    });

    it('validating not proper email should return false', function * () {
        var expectedValue = validators.validateEmail("email.pl");
        expect(expectedValue).to.eql(false);
    });

    it('validating not proper email should return false', function * () {
        var expectedValue = validators.validateEmail("emailpl@");
        expect(expectedValue).to.eql(false);
    });

    it('validating not proper email should return false', function * () {
        var expectedValue = validators.validateEmail("@email.pl");
        expect(expectedValue).to.eql(false);
    });

    it('validating proper email should return true', function * () {
        var expectedValue = validators.validateEmail("email@email.pl");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper email should return true', function * () {
        var expectedValue = validators.validateEmail("n@n.pl");
        expect(expectedValue).to.eql(true);
    });

});

describe('city validator test', function () {
    it('validating undefined city should return false', function *() {
        var expectedValue = validators.validateCity(undefined);
        expect(expectedValue).to.eql(false);
    });

    it('validating empty city should return false', function * () {
        var expectedValue = validators.validateCity();
        expect(expectedValue).to.eql(false);
    });

    it('validating null city should return false', function * () {
        var expectedValue = validators.validateCity(null);
        expect(expectedValue).to.eql(false);
    });

    it('validating not proper city should return false', function * () {
        var expectedValue = validators.validateCity("Tokio");
        expect(expectedValue).to.eql(false);
    });

    it('validating not proper city should return false', function * () {
        var expectedValue = validators.validateCity("barcelona");
        expect(expectedValue).to.eql(false);
    });

    it('validating not proper city should return false', function * () {
        var expectedValue = validators.validateCity("lon dyn");
        expect(expectedValue).to.eql(false);
    });

    it('validating not proper city should return true', function * () {
        var expectedValue = validators.validateCity("new yor");
        expect(expectedValue).to.eql(false);
    });


    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("londyn");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("Londyn");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("LONDYN");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("LONdyn");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("lonDyN");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity(" lonDyN ");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("New York");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("new  York");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("new york");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("newYork");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("NeWYORK");
        expect(expectedValue).to.eql(true);
    });

    it('validating proper city should return true', function * () {
        var expectedValue = validators.validateCity("newyork");
        expect(expectedValue).to.eql(true);
    });

});