import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, removeFromTotal } from '../actions/cartActions.js';
// import { checkoutCart } from '../actions/truckInfoActions';
// import { getCartTotal } from '../reducers/cartReducers';
import Cart from './Cart.jsx';

const CartContainer = ({ cartItems, total, removeItemFromCart, removeItemFromTotal, orderSubmitted }) => (
  <Cart
    items={cartItems}
    total={total}
    removeItemFromCart={removeItemFromCart}
    removeItemFromTotal={removeItemFromTotal}
    orderSubmitted={orderSubmitted}
  />
);

const mapStateToProps = (state) => ({
  cartItems: state.addedToCart,
  total: state.cartTotal,
  orderSubmitted: !!state.submittedOrder
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (menuItem) => dispatch(removeFromCart(menuItem)),
    removeItemFromTotal: (menuItem) => dispatch(removeFromTotal(menuItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
