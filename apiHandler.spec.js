const expect = require('chai').expect
const apiHandler = require('./apiHandler');
const validators = require('./validators');
const sinon = require('sinon');
const chai = require('chai');

describe('apiHandler tests', function () {
    describe('validateParams tests', function () {
        it('validateParams should call validateCity and validateEmail', function *() {
            var validator = sinon.mock(validators);
            validator.expects('validateCity').withArgs('londyn').returns(true);
            validator.expects('validateEmail').withArgs('dsa@wp.pl').returns(true);
            var result = apiHandler.validateParams({city:'londyn',email:'dsa@wp.pl'});
            validator.restore();
            validator.verify();
            expect(result).to.eql(true);
        });
    });
});
