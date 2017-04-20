const { db } = require('../../database/index.js');

module.exports.newItem = (item) => {
  return db.one(
    'INSERT INTO menu_items\
    (name, course, food_category, price, item_description)\
    VALUES (${name}, ${course}, ${food_category}, ${price}, ${item_description})\
    RETURNING menu_item_id',
    item);
};

module.exports.foodCategories = () => {
  return db.many('SELECT food_category FROM menu_items');
};

module.exports.menuData = (food_category) => {
  return db.many('SELECT * FROM menu_items WHERE food_category = $1', [food_category]);
};
