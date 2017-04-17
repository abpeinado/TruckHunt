const pgp = require('pg-promise')();
const schema = require('./schema.js');


const url = process.env.DATABASE_URL || 'postgres://@localhost:5432/toads';

if (process.env.DATABASE_URL) {
  pgp.pg.defaults.ssl = true;
}

const db = pgp(url);

const loadDb = (db) => {
  return schema(db);
};

// if (process.env.NODE_ENV !== 'test') {
loadDb(db)
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch(() => {
    console.error('Error connecting to database.');
  });
// }


module.exports = { db, loadDb };
