# express-cocained-geobase

Geobase cocaine service middleware for express

## Cocained

This module will work only in cocained express applicaion

## Install

Set your npm registry server to `http://npm.yandex-team.ru` then `npm install express-cocained-geobase`

## Geobase interface docs

http://doc.yandex-team.ru/face/libgeobase/concepts/interfaces-nodejs.xml

## Example

```js
var app = express();

// Для точного определения ip адреса пользователя
app.enable('trust proxy');

app.use(require('express-cocained-geobase'));

app.get('/', function (req) {
	var regionId = req.geobase.regionId(req.ip || '127.0.0.1'),
	    geo = req.geobase.parents(regionId);
});
```
