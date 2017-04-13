import React from 'react';
import { Col } from 'react-bootstrap';
import TrunkInfoSummary from './TruckInfoSummary.jsx';
import TruckMenu from './TruckMenu.jsx';

class TruckInfoLeftPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col md={8} className="truck-info-left-pane">
        <TrunkInfoSummary />
        <TruckMenu />
      </Col>
    );
  }
}

export default TruckInfoLeftPane;
