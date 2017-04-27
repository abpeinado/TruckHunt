const MenuItemsData = require('../data/menuItems.js');
const MenuItems = require('../../server/models/menuItems.js');

MenuItemsData.menuItems.forEach((item) => {
  MenuItems.newItem(item);
});
