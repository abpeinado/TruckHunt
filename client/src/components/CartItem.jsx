import React from 'react';

const CartItem = ({ name, price, quantity }) => (
  <div>
    {name} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
);

export default CartItem;
