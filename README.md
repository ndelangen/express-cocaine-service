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

// with default client
// new cocaine.Client(argv.locator)
app.use(require('express-cocained-service')('geobase', 'uatraits'));

// or with custom client
var Vow = require("vow");
var promises = require("cocaine/lib/client/methods/promises_shim").Vow(Vow);
var methods = require("cocaine/lib/client/methods/promises")(promises);
var cocaine = require("cocaine");
var client = new cocaine.Client(['apefront.tst.ape.yandex.net', 10053], methods)
app.use(require('express-cocained-service')({ client: client }, 'geobase', 'uatraits'));

app.get('/', function (req, res) {
	// Use req.service.geobase and req.service.uatraits
});
```

## API

### express-cocaine-service([options,] service, service, ...)

Request services from cocaine and store put links to them at every request.

## Options

```[options.client]``` — predefined custom cocaine client

See [connect-once options](https://github.com/floatdrop/connect-once).

[npm-url]: https://npmjs.org/package/express-cocaine-service

[npm-url]: https://npmjs.org/package/express-cocaine-service
[npm-image]: https://badge.fury.io/js/express-cocaine-service.png

[travis-url]: http://travis-ci.org/floatdrop/express-cocaine-service
[travis-image]: https://travis-ci.org/floatdrop/express-cocaine-service.png?branch=master

[coveralls-url]: https://coveralls.io/r/floatdrop/express-cocaine-service
[coveralls-image]: https://coveralls.io/repos/floatdrop/express-cocaine-service/badge.png

[depstat-url]: https://david-dm.org/floatdrop/express-cocaine-service
[depstat-image]: https://david-dm.org/floatdrop/express-cocaine-service.png?theme=shields.io
