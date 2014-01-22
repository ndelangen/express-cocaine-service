/* jshint node:true */

'use strict';

var argv = require('optimist').argv;
var cocaine = require('cocaine');
var cli = new cocaine.Client(argv.locator);

var connectOnce = require('connect-once');

module.exports = function () {
    var args = Array.prototype.slice.apply(arguments);

    var options = {};
    if (typeof args[0] === 'object') { options = args.shift(); }

    var services = args,
        modules = connectOnce(options, cli.getServices, services);

    return function expressCocainedService(req, res, next) {
        modules.when('available', function () {
            var args = Array.prototype.slice.apply(arguments);
            if (args[0]) { return next(args[0]); }
            
            req.services = req.services || {};
            for (var i = 0, l = services.length; i < l; i++) {
                req.services[services[i]] = arguments[i + 1];
            }

            next();
        });
    };
};
