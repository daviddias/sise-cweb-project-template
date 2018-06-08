var api = require('./index.js')
var SISEDB = require('sise-cweb-db')
var db = new SISEDB()

var migrations = require('sise-cweb-data')

db.import(migrations)

api.start(db, function (err, info) {
  if (err) {
    return console.log(err)
  }
  console.log('API has started', info.uri)
})
