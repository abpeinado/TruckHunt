const request = require('supertest');
const app = require('../../server/server.js');

describe('vendorIncomingOrders', () => {
  const agent = request.agent(app);

  it('should get an ignore object with a vendorID of 0', () => {
    return agent
      .post('/vendorIncomingOrders')
      .set('Accept', 'application/json')
      .send({ vendorId: 0 })
      .expect(201)
      .then(res => {
        expect(res.body.ignore).toEqual(true);
      });
  });

  it('should get an array with other vendor ids', () => {
    return agent
      .post('/vendorIncomingOrders')
      .set('Accept', 'application/json')
      .send({ vendorId: 10 })
      .expect(201)
      .then(res => {
        expect(Array.isArray(res.body)).toEqual(true);
      });
  });
});
