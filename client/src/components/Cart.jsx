/* eslint no-param-reassign: "off" */

import React from 'react';
import { Row } from 'react-bootstrap';
import { Segment, Divider, Header } from 'semantic-ui-react';
import CartItem from './CartItem.jsx';
import Checkout from './Checkout.jsx';

const Cart = ({ items, total, removeItemFromCart, removeItemFromTotal, orderSubmitted }) => {
  let totalWithDecimals = '0.00';
  const hasItems = items.length > 0;
  const itemsWithQuantities = [];
  const foodNamesInCart = {};
  for (let i = 0; i < items.length; i++) {
    if (foodNamesInCart[items[i].name]) {
      for (let j = 0; j < itemsWithQuantities.length; j++) {
        if (items[i].name === itemsWithQuantities[j].name) {
          itemsWithQuantities[j].quantity++;
        }
      }
    } else {
      foodNamesInCart[items[i].name] = 1;
      items[i].quantity = 1;
      itemsWithQuantities.push(items[i]);
    }
  }
  if (total === 0 || total === undefined) {
    totalWithDecimals = '0.00';
  } else {
    const totalAsString = total.toString();
    totalWithDecimals = `${totalAsString.slice(0, totalAsString.length - 2)}.${totalAsString.slice(totalAsString.length - 2)}`;
  }

  const cartItemNodes = hasItems ? (
    itemsWithQuantities.map((menuItem, i) =>
      <CartItem
        name={menuItem.name}
        price={menuItem.price}
        quantity={menuItem.quantity}
        key={i}
        onRemoveClicked={
          () => {
            removeItemFromCart(menuItem);
            removeItemFromTotal(menuItem);
          }
        }
      />
    )
  ) : (
    <p> You're Cart is Empty </p>
  );
  const totalNode = orderSubmitted ? (
    <div />
  ) : (
    <div>
      <Divider section />
      Total: &#36;{totalWithDecimals}
    </div>
  );

  return (
    <Row>
      <Segment>
        <Header as="h2" className="cart-title">Cart</Header>
        <Divider section />
        {cartItemNodes}
        {totalNode}
        <Checkout
          description={'you\'re tastebuds are waiting...'}
        />
      </Segment>
    </Row>
  );
};

export default Cart;
