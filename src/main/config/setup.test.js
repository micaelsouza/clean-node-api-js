const request = require('supertest');
const app = require('./app');

describe('App Setup', () => {
  test('Should disable x-powered-by header', async () => {
    app.get('/test-x-powered-by', (req, res) => res.send(''));
    const res = await request(app).get('/test-x-powered-by');
    expect(res.header['x-powered-by']).toBeUndefined();
  });
});
