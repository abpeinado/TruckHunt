const MenuItems = require('../../server/models/menuItems.js');
const { db } = require('../../database/index.js');

const testMenuItem = {
  food_category: 'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks'
};

describe('menu_items table', () => {
  it('should have a menu_items table', (done) => {
    db.any('SELECT * FROM menu_items')
      .then(() => {
        done();
      })
      .catch((error) => {
        expect(error).toBeUndefined();
        done();
      });
  });

  it('should select food categories', () => {
    return MenuItems.foodCategories()
      .then((menuItems) => {
        expect(menuItems.length > 0).toEqual(true);
        expect(menuItems[0].food_category).toBeDefined();
      });
  });

  it('should select items for specific food category', () => {
    return MenuItems.menuData(testMenuItem.food_category)
      .then((menuItems) => {
        expect(menuItems.length > 0).toEqual(true);
        expect(menuItems[0].food_category).toBeDefined();
      });
  });
});
