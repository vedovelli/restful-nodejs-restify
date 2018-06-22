
const errorHandler = (error, msg, rejectFunction) => {
  if (error) console.error(error)
  rejectFunction({ error: msg })
}

module.exports = errorHandler
