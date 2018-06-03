var migrations = require('sise-cweb-data')

var api = require('../src/index.js')

var test = require('sise-cweb-restful-api-tests').base

test(migrations, api)
