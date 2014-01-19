/* jshint node:true */

'use strict';

var cli = require('cocaine').Client();

var cache = {};

/**
 * @param {String} service
 * @param {Object} [options]
 *
 * @returns {Function}
 *
 * @example
 *
 *  var app = express();
 *
 *  app.use(require('express-geobase')());
 *
 *
 */
module.exports = function (service, options) {
    options = options || {};

    var s = cli.Service(service);
    s.connect();
    s.on('connect', function () {
        cache[service] = s;
    });

    return function expressCocainedService(req, res, next) {
        if (!cache[service]) {
            var s = cli.Service(service);
            s.connect();
            s.on('connect', function () {
                cache[service] = s;
                next();
            });
            s.on('error', function (err) {
                next(err);
            });
        } else {
            req[service] = cache[service];
            next();
        }
    };
};
