
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const categories = require('../categories')({ connection, errorHandler })
const create = () => categories.save('category-test')

test.beforeEach(t => connection.query('TRUNCATE TABLE categories'))
test.after.always(t => connection.query('TRUNCATE TABLE categories'))

test('Lista de categorias', async t => {
  await create()
  const list = await categories.all()
  t.is(list.categories.length, 1)
  t.is(list.categories[0].name, 'category-test')
})

test('Criação de categoria', async t => {
  const result = await create()
  t.is(result.category.name, 'category-test')
})

test('Atualizacao de categoria', async t => {
  await create()
  const updated = await categories.update(1, 'category-test-updated')
  t.is(updated.category.name, 'category-test-updated')
  t.is(updated.affectedRows, 1)
})

test('Remoção de categoria', async t => {
  await create()
  const removed = await categories.del(1)
  t.is(removed.affectedRows, 1)
})
