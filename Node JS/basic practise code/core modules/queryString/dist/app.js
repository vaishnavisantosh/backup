'use strict'

var _http = require('http')

var _dotenv = require('dotenv')

var _dotenv2 = _interopRequireDefault(_dotenv)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

_dotenv2.default.config()
var server = (0, _http.createServer)(function (req, res) {
  var url = req.url
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>')
    res.write('</html>')
    return res.end()
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title> This is first response by the server</title></head>')
  res.write('<body><h1> Response from node js server</h1></body>')
  res.write('</html>')
  res.end()
})
server.listen(process.env.Port)
