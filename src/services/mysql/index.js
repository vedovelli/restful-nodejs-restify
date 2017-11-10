
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

const errorHandler = (error, msg, rejectFunction) => {
  if (error) console.error(error)
  rejectFunction({ error: msg })
}

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
