import React from 'react';
import { Col, Panel, Row } from 'react-bootstrap';

const TruckMenuItem = ({ item, onAddToCartClicked }) => {
  const { name, item_description, price } = item;
  return (
    <Col md={6}>
      <Panel>
        <Row>
          <Col md={9} sm={9} xs={9}>
            <h5> {name} </h5>
            <p> {item_description} </p>
          </Col>
          <Col md={3} sm={9} xs={3}>
            <p> &#36;{price} </p>
            <button onClick={onAddToCartClicked}>
              Add to cart
            </button>
          </Col>
        </Row>
      </Panel>
    </Col>
  );
};

export default TruckMenuItem;
