const dbConfig = require('../database/index.js');
const Users = require('../server/models/users.js');

let db = null;

beforeAll(() => {
  process.env.NODE_ENV = 'test';
  db = dbConfig.db;
  return dbConfig.loadDb(db);
});

afterAll(() => {
  delete process.env.NODE_ENV;
  return db.one("DELETE FROM users WHERE first_name = 'John'");
});

describe('Users table', () => {
  let userId = null;

  it('should have a users table', (done) => {
    db.any('SELECT * FROM users')
      .then(result => {
        done();
      })
      .catch(error => {
        throw error;
      });
  });

  it('should add a new user into the table', () => {
    const newUser = {
      email: 'test@example.com',
      first_name: 'John',
      last_name: 'Smith',
      password: 'password'
    };
    return Users.new(newUser)
      .then(userId => {
        expect(userId).toBeDefined();
      });
  });
});
