module.exports = (db) => {
  return db.query('CREATE TABLE IF NOT EXISTS users(\
    user_id SERIAL PRIMARY KEY,\
    email VARCHAR(30) NOT NULL UNIQUE,\
    first_name VARCHAR(20) NOT NULL,\
    last_name VARCHAR(20) NOT NULL,\
    password VARCHAR(200) NOT NULL,\
    phone VARCHAR(20),\
    created TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,\
    modified TIMESTAMPTZ\
    );');
};
