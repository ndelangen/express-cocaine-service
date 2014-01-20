/* jshint node:true */

'use strict';

var argv = require('optimist').argv;
var cocaine = require('cocaine');
var cli = new cocaine.Client(argv.locator);

var connectOnce = require('connect-once');

module.exports = function (services, options) {
    options = options || {};

    if (typeof services === 'string') {
        services = [ services ];
    }

    var modules = connectOnce(cli.getServices, services);

    return function expressCocainedService(req, res, next) {
        modules.when('available', function () {
            var args = Array.prototype.slice.apply(arguments);
            if (args[0]) { return next(args[0]); }

            for (var i = 0; i < services.length; i++) {
                req[services[i]] = arguments[i + 1];
            }
        });
    };
};
