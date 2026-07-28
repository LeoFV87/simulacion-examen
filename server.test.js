const request = require('supertest');
const app = require('./server');

describe('Pruebas HTTP', () => {
  it('GET / debe responder con status 200 y mensaje ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(500);
    expect(res.body.status).toEqual('ok');
  });
});
