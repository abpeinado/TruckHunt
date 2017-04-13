const { db } = require('../../database/index.js');

module.exports.new = (user) => {
  return db.one(
    'INSERT INTO users\
    (email, first_name, last_name, password)\
    VALUES (${email}, ${first_name}, ${last_name}, ${password})\
    RETURNING user_id',
    user);
};

module.exports.findByEmail = (email) => {
  return db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
};

module.exports.update = (userId, column, updatedValue) => {
  return db.query('UPDATE users SET $1~ = $2 WHERE user_id = $3 RETURNING *', [column, updatedValue, userId]);
};

module.exports.delete = (userId) => {
  return db.query('DELETE FROM users WHERE user_id = $1', [userId]);
};
