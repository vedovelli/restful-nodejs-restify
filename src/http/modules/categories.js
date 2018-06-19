
const db = require('../../services/mysql')

module.exports = function categories (server) {
  server.get('/categoria', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.get('/categoria/:id', async (req, res, next) => {
    try {
      res.send(await db.categories().one(req.params.id))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.post('/categoria', async (req, res, next) => {
    const { name } = req.body
    try {
      res.send(await db.categories().save(name))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.put('/categoria', async (req, res, next) => {
    const { id, name } = req.body
    try {
      res.send(await db.categories().update(id, name))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.del('/categoria/:id', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.categories().del(id))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })
}
