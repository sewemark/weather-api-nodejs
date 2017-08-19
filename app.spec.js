/**
 * Created by sew on 2017-08-19.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./app');
var should = chai.should();

chai.use(chaiHttp);

describe('app tests', function () {
    describe('/GET weather tests', function () {
        it('getting weather with proper params shoudl return ok', function *() {
            chai.request(server)
                .get('/weather?email=ds@wp.pl&city=londyn')
                .end(function(err, res) {
                        res.should.have.status(200);
                });
        });

        it('getting weather with not proper params shoudl return bad request', function *() {
            chai.request(server)
                .get('/weather?email=ds@wp.pl&city=23ddd')
                .end(function(err, res) {
                    res.should.have.status(400);
                });
        });
    });
});

