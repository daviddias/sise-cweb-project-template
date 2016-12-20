'use strict'

var http = require('http')
var routes = require('./routes')

var server

function start (db, callback) {
  var port = (Number(process.env.PORT)) || 9090

  function listening (err) {
    if (err) {
      return callback(err)
    }

    var info = { uri: `http://localhost:${port}` }
    callback(null, info)
  }

  server = http.createServer(routes(db))
  server.listen(port, listening)
  return server
}

function stop (callback) {
  if (server) {
    server.close(callback)
  } else {
    callback(new Error('Server hasn\'t started yet'))
  }
}

exports = module.exports
exports.start = start
exports.stop = stop
