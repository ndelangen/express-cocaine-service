# express-cocaine-service 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]
> Cocaine service middleware wrapper for express

## Cocaine

This module will work only in cocained express applicaion

## Install

`npm install express-cocaine-service --save`

## Example

```js
var app = express();

app.use(require('express-cocaine-service')('geobase', 'uatraits'));

app.get('/', function (req, res) {
	// Use req.service.geobase and req.service.uatraits
});
```

## API

### express-cocaine-service([options,] service, service, ...)

Request services from cocaine and store put links to them at every request.

## Options

See [connect-once options](https://github.com/floatdrop/connect-once).

[npm-url]: https://npmjs.org/package/express-cocaine-service
[npm-image]: https://badge.fury.io/js/express-cocaine-service.png

[travis-url]: http://travis-ci.org/floatdrop/express-cocaine-service
[travis-image]: https://travis-ci.org/floatdrop/express-cocaine-service.png?branch=master

[coveralls-url]: https://coveralls.io/r/floatdrop/express-cocaine-service
[coveralls-image]: https://coveralls.io/repos/floatdrop/express-cocaine-service/badge.png

[depstat-url]: https://david-dm.org/floatdrop/express-cocaine-service
[depstat-image]: https://david-dm.org/floatdrop/express-cocaine-service.png?theme=shields.io
