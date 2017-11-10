
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const dependencies = { connection, errorHandler }
const categories = require('../categories')(dependencies)
const products = require('../products')(dependencies)
const createCategory = () => categories.save('category-test')
const createProduct = (categoryId) => products.save('product-test', categoryId)

test.beforeEach(t => {
  connection.query('TRUNCATE TABLE categories')
  connection.query('TRUNCATE TABLE products')
})

test.after.always(t => {
  connection.query('TRUNCATE TABLE categories')
  connection.query('TRUNCATE TABLE products')
})

test('Lista de categorias com produtos', async t => {
  const id = (await createCategory()).id
  await createProduct(id)
  await createProduct(id)
  const list = await categories.all()
  t.is(list.categories.length, 1)
  t.is(list.categories[0].products.length, 2)
  t.is(list.categories[0].products[0], 'product-test')
})

test('Criação de categoria', async t => {
  const result = await createCategory()
  t.is(result.category.name, 'category-test')
})

test('Atualizacao de categoria', async t => {
  await createCategory()
  const updated = await categories.update(1, 'category-test-updated')
  t.is(updated.category.name, 'category-test-updated')
  t.is(updated.affectedRows, 1)
})

test('Remoção de categoria', async t => {
  await createCategory()
  const removed = await categories.del(1)
  t.is(removed.affectedRows, 1)
})
