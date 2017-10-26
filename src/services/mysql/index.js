
const { connection, errorHandler } = require('./setup')

const categoryModule = require('./categories')({ connection, errorHandler })
const usersModule = require('./users')({ connection, errorHandler })
const authModule = require('./auth')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule,
  users: () => usersModule,
  auth: () => authModule
}
