/* eslint-disable no-unused-expressions */

import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './HeaderLimitedWLogin.jsx';
import TruckInfoLeftPane from './TruckInfoLeftPane.jsx';
import TruckList from './TruckList.jsx';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';

class TruckDetail extends React.Component {

  componentDidMount() {
    // const category = this.props.truckSelected.food_category;
    this.props.truckInfo;
  }

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
          <Col md={8} sm={12}>
            <TruckInfoLeftPane />
          </Col>
          <Col md={4} smHidden={12}>
            <TruckList />
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

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetail);
