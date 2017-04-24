import React from 'react';
import { Message, Card, Header, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TruckMenuItem from './TruckMenuItem.jsx';
import { addToCart } from '../actions/cartActions.js';

export const TruckMenuGroupComponent = ({ menuGroup, addItemToCart }) => {
  const { title, items } = menuGroup;
  return (
    <Message className="truck-menu-group">
      <Header as="h2" textAlign="center">{title}</Header>
      <Divider section />
      <Card.Group itemsPerRow={2}>
        {items.map((item, i) =>
          <TruckMenuItem
            item={item}
            key={i}
            onAddToCartClicked={() => addItemToCart(item)}
          />
        )}
      </Card.Group>
    </Message>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (itemID) => dispatch(addToCart(itemID))
  };
};

const TruckMenuGroup = connect(null, mapDispatchToProps)(TruckMenuGroupComponent);

export default TruckMenuGroup;
