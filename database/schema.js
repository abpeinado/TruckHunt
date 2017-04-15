module.exports = (db) => {
  return db.query('DROP TABLE IF EXISTS\
    owners\
    ')
  .then(() => {
    return db.query('CREATE TABLE IF NOT EXISTS vendors(\
      user_id SERIAL PRIMARY KEY,\
      email VARCHAR(30) NOT NULL UNIQUE,\
      first_name VARCHAR(20) NOT NULL,\
      last_name VARCHAR(20) NOT NULL,\
      password VARCHAR(200) NOT NULL,\
      created TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,\
      modified TIMESTAMPTZ\
      );');
  })
  .then(() => {
    return db.query('CREATE TABLE IF NOT EXISTS customers(\
      _id SERIAL PRIMARY KEY,\
      email VARCHAR(50),\
      stripe_id INT,\
      username VARCHAR(30) NOT NULL,\
      password VARCHAR(255) NOT NULL,\
      salt VARCHAR(40) NOT NULL,\
      created TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\
      );');
  })
  .then(() => {
    return db.query('CREATE TABLE IF NOT EXISTS reviews(\
      _id SERIAL PRIMARY KEY,\
      customer_id INT NOT NULL,\
      vendor_id INT NOT NULL,\
      rating SMALLINT NOT NULL,\
      review VARCHAR(500) NOT NULL\
      );');
  })
  .then(() => {
    return db.query('CREATE TABLE IF NOT EXISTS menu_items(\
      _id SERIAL PRIMARY KEY,\
      vendor_id INT NOT NULL,\
      name VARCHAR(100) NOT NULL,\
      type VARCHAR(100),\
      price SMALLINT NOT NULL,\
      item_description VARCHAR(500),\
      item_img VARCHAR(200)\
      );');
  })
  .then(() => {
    return db.query('CREATE TABLE IF NOT EXISTS orders(\
      _id SERIAL PRIMARY KEY,\
      vendor_id INT NOT NULL,\
      customer_id INT NOT NULL,\
      menu_item_id INT NOT NULL,\
      price_total INT NOT NULL,\
      order_status SMALLINT NOT NULL,\
      order_pickup SMALLINT NOT NULL,\
      order_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\
      );');
  })
  .then(() => {
    return db.query('CREATE TABLE IF NOT EXISTS schedules(\
      _id SERIAL PRIMARY KEY,\
      time TIMESTAMPTZ NOT NULL,\
      lat VARCHAR(255) NOT NULL,\
      long VARCHAR(255) NOT NULL,\
      vendor_id INT NOT NULL,\
      day VARCHAR(50) NOT NULL\
      );');
  })
  .catch((error) => {
    console.log('error: ', error);
  });
};
