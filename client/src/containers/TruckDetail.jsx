/* eslint-disable no-unused-expressions */

import React from 'react';
import { Grid, Col, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './HeaderLimitedWLogin.jsx';
import TruckInfoLeftPane from '../components/TruckInfoLeftPane.jsx';
import TruckList from './TruckList.jsx';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';

class TruckDetail extends React.Component {
  render() {
    const { truckInfoHasErrored, truckInfoIsLoading, truckInfo } = this.props;
    if (truckInfoHasErrored) {
      return (
        <div>
          <Header />
          <Grid fluid >
            <Row style={{textAlign:"center", paddingTop: "2em"}}>
              <Image src='https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/Truck_Loading.gif'/>
              <h2 style={{ textAlign:"center" }}>
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
            <Row style={{textAlign:"center", paddingTop: "2em"}}>
              <Image src='https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/Truck_Loading.gif'/>
              <h2 style={{ textAlign:"center" }}>
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
