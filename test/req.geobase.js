var express = require('express'),
    request = require('supertest'),
    should = require('chai').should();

var GeobaseLookup = require('geobase3').GeobaseLookup;

describe('req', function(){
    describe('.geobase', function(){
        it('should be GeobaseLookup instance', function (done) {
            var app = express();

            app.use(require('..')());

            app.get('/', function (req, res) {
                req.should.include.keys('geobase');
                req.geobase.should.be.an.instanceof(GeobaseLookup);
                res.send('');
            });

            request(app)
                .get('/')
                .expect('', done);
        });
    });
});
