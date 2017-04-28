/* eslint-disable no-unused-expressions */

import React from 'react';
import { Grid, Col, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './HeaderLimitedWLogin.jsx';
import TruckInfoLeftPane from '../components/TruckInfoLeftPane.jsx';
import CartContainer from './CartContainer.jsx';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';

class TruckInfo extends React.Component {
  render() {
    const { truckInfoHasErrored, truckInfoIsLoading, truckInfo } = this.props;
    if (truckInfoHasErrored) {
      return (
        <div>
          <Header />
          <Grid fluid >
            <Row className="truckDetailText">
              <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/Truck_Loading.gif" />
              <h2 className="textCenter">
                Sorry! There was an error loading this trucks data!
              </h2>
            </Row>
          </Grid>
        </div>
      );
    }
    if (truckInfoIsLoading || Object.keys(truckInfo).length === 0) {
      return (
        <div>
          <Header />
          <Grid fluid >
            <Row className="truckDetailText">
              <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/Truck_Loading.gif" />
              <h2 className="textCenter">
                Loading..
              </h2>
            </Row>
          </Grid>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Grid fluid>
          <Col lg={8} smHidden={12} >
            <TruckInfoLeftPane />
          </Col>
          <Col lg={4} smHidden={12} >
            <CartContainer />
          </Col>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckInfo: state.truckInfo,
    truckInfoHasErrored: state.truckInfoHasErrored,
    truckInfoIsLoading: state.truckInfoIsLoading,
    truckSelected: state.truckSelected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    truckInfoFetchData: (truckCategory) => dispatch(truckInfoFetchData(truckCategory))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckInfo);
