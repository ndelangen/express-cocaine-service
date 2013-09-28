module.exports = process.env.EXPRESS_MIDDLEWARE_COV
  ? require('./lib-cov')
  : require('./lib');
