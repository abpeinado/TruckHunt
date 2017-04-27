import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TruckMenu from './TruckMenu.jsx';
import TrunkInfoSummary from './TruckInfoSummary.jsx';

const TruckInfoLeftPane = () => {
  return (
    <Col md={10} mdOffset={1} className="gridLeftWrapper truck-info-left-pane" >
      <Row className="truckSummary">
        <TrunkInfoSummary />
      </Row>
      <Row>
        <TruckMenu />
      </Row>
    </Col>
  );
};


export default TruckInfoLeftPane;
