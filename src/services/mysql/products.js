
const products = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM products', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as produtos', reject)
            return false
          }
          resolve({ products: results })
        })
      })
    },
    list: (category) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        const { category_id: categoryId } = category

        connection.query('SELECT * FROM products WHERE category_id = ?', [categoryId], (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as produtos', reject)
            return false
          }
          resolve({ products: results })
        })
      })
    },
    one: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM products WHERE id = ?', id, (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao obter a produto', reject)
            return false
          }
          resolve({ product: results[0] })
        })
      })
    },
    save: (name, categoryId) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('INSERT INTO products (name, category_id) VALUES (?, ?)', [name, categoryId], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao salvar a produto ${name}`, reject)
            return false
          }
          resolve({ product: { name, category_id: categoryId, id: results.insertId } })
        })
      })
    },
    update: (id, name, categoryId) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('UPDATE products SET name = ?, category_id = ? WHERE id = ?', [name, categoryId, id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao atualizar a produto ${name}`, reject)
            return false
          }
          resolve({ product: { name, category_id: categoryId, id }, affectedRows: results.affectedRows })
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('DELETE FROM products WHERE id = ?', [id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao remover a produto de id ${id}`, reject)
            return false
          }
          resolve({ message: 'Produto removido com sucesso!', affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = products
