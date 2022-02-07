const { pool } = require('./db_conn');

const query = (queryText, params) => {
  return new Promise((resolve, reject) => {
    pool.query(queryText, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err);
      })
  }) 
}

module.exports = { query }