
const expect = require('chai').expect


describe('The  module', function () {
    it('saves the content', function * () {

        const result = 'test';
        expect(result).to.eql('test')
    })
})