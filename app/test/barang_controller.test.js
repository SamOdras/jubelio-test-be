const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = (exports.lab = Lab.script());
const { init } = require('../../server');


describe('CRUD TEST', () => {
  let server;
  let current_data;
  beforeEach(async ()=> {
    server = await init();
    const res = await server.inject({
      method: "get",
      url: "/barang/tarik/6"
    });
    current_data = res.result.data;
  })
  afterEach(async () => {
    await server.stop()
  })
  describe('GET /', () => {
    it("Respond with 200 if get data", async () => {
      const res = await server.inject({
        method: "get",
        url: "/barang/tarik/1"
      });
      expect(res.statusCode).to.equal(200);
    });
    it("Data Should contain more than 10 if limit > 1", async () => {
      const res = await server.inject({
        method: "get",
        url: "/barang/tarik/2"
      });
      let data = res.result.data;
      expect(data.length).to.greaterThan(10);
    })
  })
  describe('POST /', () => {
    it('Cant Insert Data With Same SKU', async () => {
      const res = await server.inject({
        method: 'post',
        url: "/barang/tambah",
        payload: current_data[0]
      })
      expect(res.statusCode).to.equal(400)
    })
    it('Cant Insert Data With Same Product No', async () => {
      const res = await server.inject({
        method: "post",
        url: "/barang/tambah",
        payload: {...current_data[0], product_no: 9999}
      });
      expect(res.statusCode).to.equal(400);
    })
    it('Successfully insert new data with unique Product number and SKU', async () => {
      const res = await server.inject({
        method: "post",
        url: "/barang/tambah",
        payload: { ...current_data[0], product_no: 9999, product_sku: "9999" }
      });
      expect(res.statusCode).to.equal(200);
    })
  })
  describe('PUT /', () => {
    it("Should successfully update the data", async () => {
      const res = await server.inject({
        method: "put",
        url: "/barang/update",
        payload: current_data[0]
      });
      expect(res.statusCode).to.equal(200);
    });
  })
  describe('DELETE /', () => {
    it("Should Successfully delete the data", async () => {
      const res = await server.inject({
        method: "delete",
        url: "/barang/hapus/9999",
      });
      expect(res.statusCode).to.equal(200)
    })
  })
})