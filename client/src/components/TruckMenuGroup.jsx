import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TruckMenuItem from './TruckMenuItem.jsx';

const TruckMenuGroup = (props) => {
  const { title, items } = props.menuGroup;
  return (
    <Row className="truck-menu-group">
      <Col md={12}>
        <Row>
          <h3> {title} </h3>
        </Row>
        <Row>
          {items.map((item, i) =>
            <TruckMenuItem item={item} key={i} />
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default TruckMenuGroup;
