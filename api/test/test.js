var migrations = require('../node_modules/sise-db/test/migrations.json')

var api = require('../src/index.js')

var test = require('sise-restful-api-tests').base

test(migrations, api)
