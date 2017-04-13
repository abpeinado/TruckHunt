import React from 'react';
import { Col, Panel } from 'react-bootstrap';

const TruckMenuItem = () => {
  // requires a name, description, price;
  return (
    <Col md={6}>
      <Panel>
        <h5> Veggie Delight </h5>
        <p> Green Peppers, Mushrooms, Spinach</p>
      </Panel>
    </Col>
  );
};

export default TruckMenuItem;
