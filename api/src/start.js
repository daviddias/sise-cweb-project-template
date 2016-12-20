var api = require('./index.js')
var SISEDB = require('sise-db')
var db = new SISEDB()

var migrations = require('../node_modules/sise-db/test/migrations.json')

db.import(migrations)

api.start(db, function (err, info) {
  if (err) {
    return console.log(err)
  }
  console.log('API has started', info.uri)
})
