import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TruckMenuGroup from './TruckMenuGroup.jsx';

class TruckMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <TruckMenuGroup />
          <TruckMenuGroup />
          <TruckMenuGroup />
        </Col>
      </Row>
    );
  }
}

export default TruckMenu;
