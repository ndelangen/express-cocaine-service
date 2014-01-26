/* global describe, it, beforeEach */
/* jshint expr:true */
'use strict';

delete require.cache[require.resolve('..')];
var ces = require('..'),
    should = require('should');

describe('express-cocaine-service', function () {
    beforeEach(function () {
        this.req = {};
    });

    it('should request services before request', function (done) {
        var client = { getServices: function (services, cb) {
            setTimeout(cb.apply, 1000, cb, [null].concat(services));
        }};

        var mw = ces({ client: client }, 'one');
        setTimeout(function () {
            var requestTime = (new Date()).getTime();
            mw(this.req, {}, function () {
                var responseTime = (new Date()).getTime();
                (responseTime - requestTime).should.be.below(400);
                done();
            }.bind(this));
        }, 700);
    });

    it('should pass services to req', function (done) {
        var client = { getServices: function (services, cb) {
            cb.apply(cb, [null].concat(services));
        }};

        var mw = ces({ client: client }, 'one', 'two');
        mw(this.req, {}, function () {
            should.exist(this.req.services);
            should.exist(this.req.services.one);
            this.req.services.one.equals('one');
            should.exist(this.req.services.two);
            this.req.services.two.equals('two');
            done();
        }.bind(this));
    });
});
