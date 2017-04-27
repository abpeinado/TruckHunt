/* eslint-disable no-unused-expressions */

import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './HeaderLimitedWLogin.jsx';
import TruckInfoLeftPane from '../components/TruckInfoLeftPane.jsx';
import CartContainer from './CartContainer.jsx';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';

class TruckInfo extends React.Component {
  render() {
    const { truckInfoHasErrored, truckInfoIsLoading, truckInfo } = this.props;
    if (truckInfoHasErrored) {
      return <p>Sorry! There was an error loading this trucks info</p>;
    }
    if (truckInfoIsLoading || Object.keys(truckInfo).length === 0) {
      return <p>Loading…</p>;
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
