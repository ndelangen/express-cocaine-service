# express-cocaine-service

Cocaine service middleware wrapper for express

## Cocaine

This module will work only in cocained express applicaion

## Install

Set your npm registry server to `http://npm.yandex-team.ru` then `npm install express-cocaine-service --save`

## Example

```js
var app = express();

app.use(require('express-cocained-service')(['geobase', 'uatraits']));

app.get('/', function (req, res) {
	// Use req.geobase and req.uatraits
});
```
