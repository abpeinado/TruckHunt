// const pgp = require('pg-promise');

module.exports = (db) => {
  return db.query('CREATE TABLE IF NOT EXISTS trucks (\
    truck_id BIGINT NOT NULL PRIMARY KEY,\
    email VARCHAR(150),\
    first_name VARCHAR(30),\
    last_name VARCHAR(30),\
    username VARCHAR(30),\
    password VARCHAR(255),\
    salt VARCHAR(255),\
    photo VARCHAR(255),\
    phone_number INT,\
    joined TIMESTAMP(8) default (now()));');
  // .then( () => {
  //   return db.query('CREATE TABLE IF NOT EXISTS truckSchedule (\
  //     id SERIAL PRIMARY KEY,\
  //     dayorder SMALLINT,')
  // })
};


// TODO: add tables for truckSchedule && truckDetails
// see json files in data folder, lists field names

// TODO: est db connection
