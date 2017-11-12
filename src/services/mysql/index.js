
const { connection, errorHandler } = require('./setup')
const dependencies = { connection, errorHandler }

const categoryModule = require('./categories')(dependencies)
const usersModule = require('./users')(dependencies)
const productsModule = require('./products')(dependencies)
const authModule = require('./auth')(dependencies)

module.exports = {
  categories: () => categoryModule,
  products: () => productsModule,
  users: () => usersModule,
  auth: () => authModule
}
