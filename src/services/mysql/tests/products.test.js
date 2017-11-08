
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const products = require('../products')({ connection, errorHandler })
const categoryId = 1
const create = () => products.save('product-test', categoryId)

test.beforeEach(t => connection.query('TRUNCATE TABLE products'))
test.after.always(t => connection.query('TRUNCATE TABLE products'))

test('Lista de produtos', async t => {
  await create()
  const list = await products.all()
  t.is(list.products.length, 1)
  t.is(list.products[0].name, 'product-test')
})

test('Criação de produto', async t => {
  const result = await create()
  t.is(result.product.name, 'product-test')
  t.is(result.product.category_id, 1)
})

test('Atualizacao de produto', async t => {
  await create()
  const updated = await products.update(1, 'product-test-updated', 2)
  t.is(updated.product.name, 'product-test-updated')
  t.is(updated.product.category_id, 2)
  t.is(updated.affectedRows, 1)
})

test('Remoção de produto', async t => {
  await create()
  const removed = await products.del(1)
  t.is(removed.affectedRows, 1)
})
