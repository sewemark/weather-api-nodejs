const expect = require('chai').expect
const appConfig = require('./config');

describe('app config test', function () {
    it('app key should be set properly', function *() {
        var expectedValue = appConfig.APP_KEY;
        expect(expectedValue).to.eql('5c981cf4fd4cefdf6a38cf7118441aaa');
    });

    it('port should be set properly', function *() {
        var expectedValue = appConfig.PORT;
        expect(expectedValue).to.eql(3000);
    });

});