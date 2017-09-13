
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const users = require('../users')({ connection, errorHandler })
const create = () => users.save('user@test.com', '123456')

test.beforeEach(t => connection.query('TRUNCATE TABLE users'))
test.after.always(t => connection.query('TRUNCATE TABLE users'))

test('Lista de usuários', async t => {
  await create()
  const list = await users.all()
  t.is(list.users.length, 1)
  t.is(list.users[0].email, 'user@test.com')
})

test('Criação de usuário', async t => {
  const result = await create()
  t.is(result.user.email, 'user@test.com')
})

test('Atualizacao de usuário', async t => {
  await create()
  const updated = await users.update(1, '123456789')
  t.is(updated.affectedRows, 1)
})

test('Remoção de usuário', async t => {
  await create()
  const removed = await users.del(1)
  t.is(removed.affectedRows, 1)
})
