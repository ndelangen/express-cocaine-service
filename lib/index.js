var cocaine = require('cocaine');

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

    cocaine.getServices([service], function(serviceInstance) {
        cache[service] = serviceInstance;
    }); 

    return function expressCocainedService(req, res, next) {
        if (!cache[service]) {
            cocaine.getServices([service], function(serviceInstance) {
                cache[service] = serviceInstance;
                req[service] = cache[service];
                next();
            }); 
        } else {
            req[service] = cache[service];
            next();
        }
    };
};
