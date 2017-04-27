import React from 'react';
import { Message, Card, Header, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TruckMenuItem from './TruckMenuItem.jsx';
import { addToCart, addToTotal } from '../actions/cartActions.js';
import { clearSubmitOrderSuccess } from '../actions/checkoutActions.js';

export const TruckMenuGroupComponent = ({
  menuGroup, addItemToCart, addItemToTotal, clearSuccess, numItemsInCart }) => {
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
            onAddToCartClicked={
              () => {
                addItemToCart(item);
                addItemToTotal(item);
                if (numItemsInCart === 0) {
                  clearSuccess();
                }
              }
            }
          />
        )}
      </Card.Group>
    </Message>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (itemID) => dispatch(addToCart(itemID)),
    addItemToTotal: (itemID) => dispatch(addToTotal(itemID)),
    clearSuccess: () => dispatch(clearSubmitOrderSuccess())
  };
};

const mapStateToProps = (state) => {
  return {
    numItemsInCart: state.addedToCart.length
  };
};

const TruckMenuGroup = connect(mapStateToProps, mapDispatchToProps)(TruckMenuGroupComponent);

export default TruckMenuGroup;
