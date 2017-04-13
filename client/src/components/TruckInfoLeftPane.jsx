import React from 'react';
import { Col } from 'react-bootstrap';
import TrunkInfoSummary from './TruckInfoSummary.jsx';
import TruckMenu from './TruckMenu.jsx';

const TruckInfoLeftPane = () => {
  return (
    <Col md={8} className="truck-info-left-pane">
      <TrunkInfoSummary />
      <TruckMenu />
    </Col>
  );
};

export default TruckInfoLeftPane;
