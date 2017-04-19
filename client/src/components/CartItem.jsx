import React from 'react';

const CartItem = ({ name, price, quantity, onRemoveClicked }) => (
  <div>
    {name} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    <button onClick={onRemoveClicked} >Remove</button>
  </div>
);

export default CartItem;
