import React from 'react';
import { Col, Panel, Row } from 'react-bootstrap';

const TruckMenuItem = (props) => {
  const { name, description, price } = props.item;
  return (
    <Col md={6}>
      <Panel>
        <Row>
          <Col md={9} sm={9} xs={9}>
            <h5> {name} </h5>
            <p> {description} </p>
          </Col>
          <Col md={3} sm={9} xs={3}>
            <p> {price} </p>
          </Col>
        </Row>
      </Panel>
    </Col>
  );
};

export default TruckMenuItem;
