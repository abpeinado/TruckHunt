import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';


class TruckInfoSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, name, description, rating } = this.props.truckInfo;
    return (
      <Row className="truck-info-summary">
        <Col md={3}>
          <img src={image} style={{ maxHeight: '90px' }} alt="Truck Icon" />
        </Col>
        <Col md={6}>
          <h2> {name} </h2>
          <p> {description} </p>
        </Col>
        <Col md={3} className="truck-rating">
          <h3> {rating} stars </h3>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckInfo: state.truckInfo,
    truckInfoHasErrored: state.truckInfoHasErrored,
    truckInfoIsLoading: state.truckInfoIsLoading
  };
};

export default connect(mapStateToProps)(TruckInfoSummary);

