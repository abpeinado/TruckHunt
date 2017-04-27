const request = require('supertest');
const app = require('../../server/server.js');

describe('Server Main Route', () => {
  it('responds to /', (done) => {
    request(app)
    .get('/')
    .expect(200, done);
  });
});

// Will need to reference this for future tests
// Declare all testing variables
// let db;
// let tables;

// Clear tables before each new test, clean slate
// let clearTables = (connection, tables, done) => {
// };
