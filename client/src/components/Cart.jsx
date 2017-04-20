import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CartItem from './CartItem.jsx';
import Checkout from './Checkout.jsx';

const Cart = ({ items, total, removeItemFromCart }) => {
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
      <Checkout
        amount={1998}
        description={'you\'re tastebuds are waiting...'}
      />
    </Col>
  );
};

export default Cart;
