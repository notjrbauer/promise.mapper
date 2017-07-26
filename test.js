let test = require('blue-tape')
let map = require('./')

const addOne = (n) => Promise.resolve(n + 1)
const fail = () => Promise.reject(new Error('Forced Error'))

function delay (n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n)
    }, n)
  })
}

test('should map over a non-promise', (t) => {
  return map([1], addOne).then(result => {
    t.deepEquals(result, [2])
  })
})

test('should map over multiple non-promised elements', (t) => {
  return map([1, 1], addOne).then(result => {
    t.deepEquals(result, [2, 2])
  })
})

test('should map over a single promise', (t) => {
  let given = delay(50)
  return map([given], addOne).then(result => {
    t.deepEquals(result, [51])
  })
})

test('should map over multiple promises', (t) => {
  let given = [delay(3), delay(0), delay(1)]
  let expected = [4, 1, 2]
  return map(given, addOne).then(result => {
    t.deepEquals(result, expected)
  })
})

test('should map over empty sequence', (t) => {
  let given = []
  let expected = []
  return map(given, addOne).then(result => {
    t.deepEquals(result, expected)
  }).catch(t.notOk)
})

test('should fail when mapping fails', (t) => {
  let given = [delay(3), delay(0), delay(1)]
  return map(given, fail).then(t.notOk).catch(t.ok)
})

test('should fail when a promise fails', (t) => {
  let given = [delay(3), fail, delay(1)]
  return map(given, addOne)
    .then(t.ok)
    .catch(t.notOk)
})
