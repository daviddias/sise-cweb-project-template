var test = require('tape')

var bl = require('../src')

test('say hello world', function (t) {
  t.equal(bl.sayHello(), 'Hello World')
  t.end()
})

test('say hello name', function (t) {
  t.equal(bl.sayHello('CWEB'), 'Hello CWEB')
  t.end()
})

