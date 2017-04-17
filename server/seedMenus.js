const MenuItemsData = require('./data/menuItems.js');
const MenuItems = require('./models/menuItems.js');

// -----------POPULATINIG MENU ITEMS------------

// Run this file in node to seed the db with fake menu information
// TODO: get real menu's for each respective food truck

MenuItemsData.menuItems.forEach((item) => {
  MenuItems.newItem(item);
});


// const foodCategories = {
//   'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks': 0,
//   'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks': 1,
//   'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.': 2
// };
