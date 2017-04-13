import React from 'react';
import { Row, Col } from 'react-bootstrap';

class TruckInfoSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row className="truck-info-summary">
        <Col md={3}>
          <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/thesis/LogoV1.png'} style={{ maxHeight: '90px' }} alt="Truck Icon" />
        </Col>
        <Col md={6}>
          <h2> Los Pollos Hermanos</h2>
          <p> We sell the best chicken in the cosmosphere </p>
        </Col>
        <Col md={3} className="truck-rating">
          <h3> 3 stars </h3>
        </Col>
      </Row>
    );
  }
}

export default TruckInfoSummary;
