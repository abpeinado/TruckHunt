import React from 'react';
import { Row, Col } from 'react-bootstrap';
<<<<<<< HEAD
=======
import { connect } from 'react-redux';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';
>>>>>>> (feat) build truck info page with hardcoded data

class TruckInfoSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

<<<<<<< HEAD
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
=======
  componentDidMount() {
    this.props.fetchTruckInfo('');
  }

  render() {
    const { image, name, description, rating } = this.props.truckSummary;
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
>>>>>>> (feat) build truck info page with hardcoded data
        </Col>
      </Row>
    );
  }
}

<<<<<<< HEAD
export default TruckInfoSummary;
=======
const mapStateToProps = (state) => {
  return {
    truckSummary: state.truckInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTruckInfo: (truckID) => dispatch(truckInfoFetchData(truckID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckInfoSummary);
>>>>>>> (feat) build truck info page with hardcoded data
