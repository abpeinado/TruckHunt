const MenuItems = require('../models/menuItems.js');

module.exports = (req, res) => {
  const defaultFoodCategory = 'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages';
  MenuItems.foodCategories()
    .then((foodCategories) => {
      let found = false;
      for (let i = 0; i < foodCategories.length; i++) {
        if (foodCategories[i].food_category === req.body.food_category) {
          found = true;
        }
      }
      if (found) {
        return true;
      }
      return false;
    })
    .then((found) => {
      if (found) {
        return MenuItems.menuData(req.body.food_category);
      }
      return MenuItems.menuData(defaultFoodCategory);
    })
    .then((menu) => {
      const foodCategories = [];
      const menuItems = {};
      for (let i = 0; i < menu.length; i++) {
        const course = menu[i].course;
        if (!menuItems[course]) {
          foodCategories.push(menu[i].course);
          menuItems[course] = [menu[i]];
        } else {
          menuItems[course].push(menu[i]);
        }
      }
      for (let j = 0; j < foodCategories.length; j++) {
        let course = {};
        course.title = foodCategories[j];
        course.items = menuItems[foodCategories[j]];
        foodCategories[j] = course;
        course = {};
      }
      res.send(foodCategories);
    })
    .catch((error) => {
      res.send(error);
    });
};
