const { insertData, deleteData, updateData, getData } = require('../model/barang_model')
const Boom = require('boom')

const tambahBarang = async (request, h) => {
  const payload = request.payload;
  try {
    const response = await insertData(payload)
    if(response.error){
      return Boom.badRequest(response.message)
    } else {
      return h.response(payload).code(200)
    }
  } catch(e){
    return Boom.serverUnavailable(e.message)
  }
}

const hapusBarang = async (req, h) => {
  const id = req.params.id
  try {
    const response = await deleteData(id)
    if(response.error){
      return Boom.badRequest(response.message);
    } else {
      return h
        .response({
          statusCode: 200,
          message: "Data Berhasil Dihapus"
        })
        .code(200);
    }
  } catch(e) {
    return Boom.serverUnavailable(e.message);
  }
}

const updateBarang = async (req, h) => {
  const payload = req.payload;
  try {
    const response = await updateData(payload)
    if (response.error) {
      return Boom.badRequest(response.message);
    } else {
      return h
        .response({
          statusCode: 200,
          message: "Data Berhasil Diubah",
          payload
        })
        .code(200);
    }
  }catch(e) {
    return Boom.serverUnavailable(e.message);
  }
}

const getBarang = async (req, h) => {
  const limit = req.params.limit || 1
  try {
    const response = await getData(limit)
    if(response.error){
      return Boom.badRequest(response.message);
    } else {
      return h.response({
        statusCode: 200,
        message: "Berhasil Tarik Data",
        data: response.data
      }).code(200);
    }
  } catch(e){
    return Boom.serverUnavailable(e.message);
  }
}

module.exports = {
  tambahBarang,
  hapusBarang,
  updateBarang,
  getBarang
}