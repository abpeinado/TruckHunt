import React from 'react';
import { connect } from 'react-redux';
// import { checkoutCart } from '../actions/truckInfoActions';
// import { getCartTotal } from '../reducers/cartReducers';
import Cart from './Cart.jsx';

const CartContainer = ({ cartItems, total, checkout }) => (
  <Cart
    items={cartItems}
    total={total}
    onCheckoutClicked={() => checkout(cartItems)}
  />
);

const mapStateToProps = (state) => ({
  cartItems: state.addedToCart
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     checkout: (cartItems) => dispatch(checkoutCart(cartItems))
//   };
// };

export default connect(mapStateToProps)(CartContainer);
