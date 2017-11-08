
const db = require('../../services/mysql')

module.exports = function products (server) {
  server.get('produto', async (req, res, next) => {
    try {
      res.send(await db.products().all())
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.get('produto/categoria/:id', async (req, res, next) => {
    try {
      const products = await db.products().list({ category_id: req.params.id })
      res.send(products)
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.get('produto/:id', async (req, res, next) => {
    try {
      res.send(await db.products().one(req.params.id))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.post('produto', async (req, res, next) => {
    const { name } = req.body
    try {
      res.send(await db.products().save(name))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.put('produto', async (req, res, next) => {
    const { id, name } = req.body
    try {
      res.send(await db.products().update(id, name))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })

  server.del('produto/:id', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.products().del(id))
    } catch (error) {
      res.send(422, error)
    }
    next()
  })
}
