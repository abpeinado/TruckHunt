import React from 'react';
import { Grid, Segment, Divider, Header } from 'semantic-ui-react';
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

    <Grid.Column className="gridLeftWrapper cart" width={6}>
    <Segment>
        <Header as='h2' className="cart-title">Cart</Header>
        <Divider section />
        {cartItemNodes}
        <Divider section />
        Total: &#36;{total}
        <Checkout
          amount={1998}
          description={'you\'re tastebuds are waiting...'}
        />
      </Segment>
    </Grid.Column>
  );
};

export default Cart;
