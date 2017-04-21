import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';


class TruckInfoSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const truck = this.props.truckSelected;
    return (
      <Row className="truck-info-summary">
        <Col md={3}>
          <img src={truck.image} style={{ maxHeight: '90px' }} alt="Truck Icon" />
        </Col>
        <Col md={6}>
          <h2> {truck.vendor_name} </h2>
          <p> {truck.food_category} </p>
        </Col>
        <Col md={3} className="truck-rating">
          <h3> {truck.rating} stars </h3>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckSelected: state.truckSelected
  };
};

export default connect(mapStateToProps)(TruckInfoSummary);

