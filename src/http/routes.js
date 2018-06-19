
const categories = require('./modules/categories')
const products = require('./modules/products')
const users = require('./modules/users')

const db = require('../services/mysql')

const routes = (server) => {
  categories(server)
  products(server)
  users(server)

  server.post('/autenticacao', async (req, res, next) => {
    try {
      const { email, password } = req.body
      res.send(await db.auth().authenticate(email, password))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence!')
    next()
  })
}

module.exports = routes
