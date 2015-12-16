var test = require('tape')
var server = require('../src')

test('hello get', function (t) {
  server.inject({
    method: 'GET',
    url: '/hello'
  }, function (res) {
    t.equal(res.result, 'Hello World')
    t.end()
  })
})

test('hello post', function (t) {
  server.inject({
    method: 'POST',
    url: '/hello',
    payload: {
      name: 'SISE'
    }
  }, function (res) {
    t.equal(res.result, 'Hello SISE')
    t.end()
  })
})

