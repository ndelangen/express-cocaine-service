var cocaine = require('cocaine');

var geobase;

cocaine.getServices(['geobase'], function(geo) {
    geobase = geo;
}); 

/**
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
module.exports = function (options) {
    options = options || {};

    return function expressGeobase(req, res, next) {
        if (!geobase) {
            cocaine.getServices(['geobase'], function(geo) {
                geobase = geo;
                req.geobase = geobase;
                next();
            }); 
        } else {
            req.geobase = geobase;
            next();
        }
    };
};
