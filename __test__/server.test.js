const request = require('supertest');
const server = require('../server/server.js');

// Wrapping all tests inside of a describe statement
describe('server tests', () => {
  // Will need to reference this for future tests
  // Declare all testing variables
  // let db;
  // let tables;

  // Clear tables before each new test, clean slate
  // let clearTables = (connection, tables, done) => {
  // };

  // Declaring before each statement
  beforeEach((done) => {
    done();
  });

  // Delclaring after each statement
  afterEach(() => {
    server.close();
  });

  describe('basic server test', () => {
    it('responds to /', (done) => {
      request(server)
      .get('/')
      .expect(200, done);
    });

    it('Should not throw error on POST to /foodTrucks', done => {
      request(server)
        .post('/foodTrucks')
        .end((err, res) => {
          if (err) throw err;
          expect(res).toEqual(expect.anything());
          done();
        });
    });
  });
});
