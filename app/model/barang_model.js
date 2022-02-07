const { query } = require('../connection');
const table_barang = 'db_test_jubelio.list_barang'

const insertData = async ({
  product_name,
  product_sku,
  product_image,
  product_price,
  product_detail,
  product_no
}) => {
  const queryText = `INSERT INTO ${table_barang} (product_name,product_sku,product_image,product_price,product_detail,product_no) VALUES ('${product_name}','${product_sku}','${product_image}',${product_price},'${product_detail}',${product_no});`;
  const status = {error: false}
  try {
    await query(queryText);
    status.message = "Data Berhasil Ditambahkan"
    return status;
  } catch (err) {
    status.error = true
    status.message = err.message
    return status;
  }
};

const getData = async (limit) => {
  const queryText = `SELECT * FROM ${table_barang} limit ${limit * 10}`
  const status = {error: false}
  try {
    const { rows } = await query(queryText)
    status.data = rows
    return status
  } catch(e) {
    status.error = true
    status.message = e.message
    return message
  }
}

const updateData = async (data) => {
  let queryText = `UPDATE ${table_barang} SET `
  const status = { error: false };
  let updateValue = ""
  for(const key in data){
    let value;
    if(key === 'product_no' || key === 'product_price') value = data[key]
    else value = `'${data[key]}'`

    if(updateValue.length === 0) updateValue += `${key}=${value}`;
    else updateValue += `, ${key}=${value}`;
  }
  queryText += `${updateValue} WHERE product_no = ${parseInt(data.product_no)}`;
  try {
    const {rows} = await query(queryText)
    status.data = rows
    return status
  } catch(e) {
    status.error = true
    status.message = e.message
    return status
  }
}

const deleteData = async(id) => {
  const queryText = `DELETE FROM ${table_barang} WHERE product_no=${id}`
  let status = {error: false}
  try {
    const {rows} = await query(queryText)
    status.data = rows
    return status
  } catch(e){
    status.error = true
    status.message = e.message
    return status
  }
}

module.exports = { 
  insertData,
  getData,
  updateData,
  deleteData
}