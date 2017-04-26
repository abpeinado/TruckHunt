/* eslint import/prefer-default-export: 0 */

export const addToCart = itemID => ({
  type: 'ADD_TO_CART',
  itemID
});

export const removeFromCart = menuItem => ({
  type: 'REMOVE_FROM_CART',
  menuItem
});

export const addToTotal = itemID => ({
  type: 'ADD_TO_TOTAL',
  itemID
});

export const removeFromTotal = itemID => ({
  type: 'REMOVE_FROM_TOTAL',
  itemID
});
