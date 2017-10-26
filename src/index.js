
require('dotenv').config()

const server = require('./server')

server.listen(process.env.PORT, function () {
  console.log('%s listening at %s', server.name, server.url)
})
