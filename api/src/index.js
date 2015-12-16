var Hapi = require('hapi')

var server = module.exports = new Hapi.Server({
  connections: {
    routes: {
      cors: true
    }
  }
})

server.connection({
  port: 9000
})

// load routes
require('./routes/hello.js')

server.start(function (err) {
  if (err) {
    return console.log('err:' + err)
  }
  console.log('server started: ' + server.info.uri)
})
