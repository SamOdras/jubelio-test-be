const Hapi = require('@hapi/hapi')

const server = Hapi.server({
  port: 8081,
  host: 'localhost'
})


const route = (method, path, handler) => server.route({
  method, path, handler, config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  }})

const { tambahBarang, hapusBarang, getBarang, updateBarang } = require('./app/controller/barang_controller');


route("POST", "/barang/tambah", tambahBarang)
route("DELETE", "/barang/hapus/{id}", hapusBarang)
route("GET", "/barang/tarik/{limit}", getBarang)
route("PUT", "/barang/update", updateBarang)

// TESTING
exports.init = async () => {
  await server.initialize();
  return server;
}

exports.start = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

