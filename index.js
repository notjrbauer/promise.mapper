module.exports = map

async function wrap (iterator, mapper) {
  let result = []

  for (let item of iterator) {
    let target = await item
    let mapResult = await mapper(target)
    result = result.concat(mapResult)
  }
  return result
}

function * list (value) {
  for (let item of value) {
    yield item
  }
}

function map (arr, cb) {
  var iterator = list(arr)
  return wrap(iterator, cb)
}
