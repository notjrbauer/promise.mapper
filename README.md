# promise-map
> "Returns a promise containing the result of the promisified mappingFn on its elements. *Order is preserved*. Additionally, rejection occurs if any of the promises reject. 


[![NPM][promise-map-icon]][promise-map-url]

## Install

```sh
$ npm install promise.map --save
```

## Usage

```js
var map = require('promise.map')
var makeRequest = (input) => http.Get(input).then(data => data.statusCode)

map([
  'test.com',
  'malwarehacks42.ru'
  requestGoogle, // promise
], makeRequest).then((result) => {
  console.log(result) // [200, 400, 200]
})
```

## API

#### `map(input..., mapperFn)` -> `promise`

Returns a promise containing the result of the promisified mappingFn on its elements. *Order is preserved*. Additionally, rejection occurs if any of the promises reject.

##### input `Iterable<Promise|any>`
A sequence of promises or instanceof Iterable

##### mapperFn  `Function`
A mapping function that returns a *promise*

[promise-map-icon]: https://nodei.co/npm/promise.map.png?downloads=true
[promise-map-url]: https://npmjs.org/package/promise.map
