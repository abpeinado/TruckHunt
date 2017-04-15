import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import TruckMenuItem from './TruckMenuItem.jsx';
import { addToCart } from '../actions/cartActions.js';

export const TruckMenuGroupComponent = ({ menuGroup, addItemToCart }) => {
  const { title, items } = menuGroup;

  return (
    <Row className="truck-menu-group">
      <Col md={12}>
        <Row>
          <h3> {title} </h3>
        </Row>
        <Row>
          {items.map((item, i) =>
            <TruckMenuItem
              item={item}
              key={i}
              onAddToCartClicked={() => addItemToCart(item)}
            />
          )}
        </Row>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (itemID) => dispatch(addToCart(itemID))
  };
};

const TruckMenuGroup = connect(null, mapDispatchToProps)(TruckMenuGroupComponent);

export default TruckMenuGroup;
