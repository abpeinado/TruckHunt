import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CartItem from './CartItem.jsx';
import Payment from './Payment.jsx';

const Cart = ({ items, total, onCheckoutClicked, removeItemFromCart }) => {
  const hasItems = items.length > 0;
  const cartItemNodes = hasItems ? (
    items.map((menuItem, i) =>
      <CartItem
        name={menuItem.name}
        price={menuItem.price}
        quantity={1}
        key={i}
        onRemoveClicked={() => removeItemFromCart(menuItem)}
      />
    )
  ) : (
    <p> You're Cart is Empty </p>
  );

  return (
    <Col md={4} className="cart">
      <Row>
        <h4 className="cart-title"> Your Cart: </h4>
      </Row>
      {cartItemNodes}
      <p>Total: &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasItems ? '' : 'disabled'}
      >
        Checkout
      </button>
      <Payment />
    </Col>
  );
};

export default Cart;
