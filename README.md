# promise.mapper
> "Returns a promise containing the result of the promisified mappingFn on its elements. *Order is preserved*. Additionally, rejection occurs if any of the promises reject. 


[![NPM][promise-mapper-icon]][promise-mapper-url]

## Install

```sh
$ npm install promise.mapper --save
```

## Usage

```js
var map = require('promise.mapper')
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

[promise-mapper-icon]: https://nodei.co/npm/promise.mapper.png?downloads=true
[promise-mapper-url]: https://npmjs.org/package/promise.mapper
