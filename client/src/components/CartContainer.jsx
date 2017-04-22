import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions.js';
// import { checkoutCart } from '../actions/truckInfoActions';
// import { getCartTotal } from '../reducers/cartReducers';
import Cart from './Cart.jsx';

const CartContainer = ({ cartItems, total, removeItemFromCart }) => (
  <Cart
    items={cartItems}
    total={total}
    removeItemFromCart={removeItemFromCart}
  />
);

const mapStateToProps = (state) => ({
  cartItems: state.addedToCart
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (menuItem) => dispatch(removeFromCart(menuItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
