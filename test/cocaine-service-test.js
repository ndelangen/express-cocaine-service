/* global describe, it */
/* jshint expr:true */
'use strict';

delete require.cache[require.resolve('..')];
var ces = require('..'),
    should = require('should');

describe('express-cocaine-service', function () {
    it('should request services before request', function (done) {
        var client = { getServices: function (services, cb) {
            setTimeout(function () {
                cb.apply(cb, [null].concat(services));
            }, 1000);
        }};

        var mw = ces({ client: client }, 'one');
        setTimeout(function () {
            var requestTime = (new Date()).getTime();
            mw({}, {}, function () {
                var responseTime = (new Date()).getTime();
                (responseTime - requestTime).should.be.below(400);
                done();
            });
        }, 700);
    });

    it('should pass services to req', function (done) {
        var client = { getServices: function (services, cb) {
            cb.apply(cb, [null].concat(services));
        }};

        var mw = ces({ client: client }, 'one', 'two');
        var req = {};
        mw(req, {}, function () {
            should.exist(req.services);
            should.exist(req.services.one);
            should.equal(req.services.one, 'one');
            should.exist(req.services.two);
            should.equal(req.services.two, 'two');
            done();
        });
    });
});
