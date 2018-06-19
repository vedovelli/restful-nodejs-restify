
const db = require('../../services/mysql')

module.exports = function users (server) {
  server.get('/usuario', async (req, res, next) => {
    try {
      res.send(await db.users().all())
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.get('/usuario/:id', async (req, res, next) => {
    try {
      res.send(await db.users().one(req.params.id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('/usuario', async (req, res, next) => {
    const { email, password } = req.body
    try {
      res.send(await db.users().save(email, password))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.put('/usuario', async (req, res, next) => {
    const { id, name } = req.body
    try {
      res.send(await db.users().update(id, name))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.del('/usuario/:id', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.users().del(id))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })
}
