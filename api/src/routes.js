'use strict'

function routes (db) {
  return function incomingRequest (req, res) {
    // CORS set up
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    var path = req.url
    if (path === '/insurance') {
      db.getInsurances(function (err, insurances) {
        if (err) {
          res.writeHead(500)
          res.end()
          return
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(insurances))
      })
    } else {
      res.writeHead(501)
      res.end()
    }
  }
}

module.exports = routes
