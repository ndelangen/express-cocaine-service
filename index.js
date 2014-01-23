/* jshint node:true */

'use strict';

var argv = require('optimist').argv;
var cocaine = require('cocaine');

var connectOnce = require('connect-once');

var slice = [].slice;

module.exports = function () {
    var args = Array.prototype.slice.apply(arguments);

    var options = {};
    if (typeof args[0] === 'object') { options = args.shift(); }

    options.client = options.client || new cocaine.Client(argv.locator);

    var services = args,
        modules = new connectOnce(options, options.client.getServices.bind(options.client), services);

    return function expressCocainedService(req, res, next) {
        modules.when('available', function () {
            var args = slice.apply(arguments),
                err = args.shift();

            if (err) { return next(err); }

            req.services = req.services || {};
            for (var i = 0, l = services.length; i < l; i++) {
                req.services[services[i]] = args[i];
            }

            next();
        });
    };
};