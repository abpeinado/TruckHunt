import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TruckMenuItem from './TruckMenuItem.jsx';

const TruckMenuGroup = () => {
  // requires a category and menu items
  return (
    <Row className="truck-menu-group">
      <Col md={12}>
        <Row>
          <h3> Pizza </h3>
        </Row>
        <Row>
          <TruckMenuItem />
          <TruckMenuItem />
          <TruckMenuItem />
          <TruckMenuItem />
        </Row>
      </Col>
    </Row>
  );
};

export default TruckMenuGroup;
