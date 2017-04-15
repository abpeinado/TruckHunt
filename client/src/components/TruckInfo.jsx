import React from 'react';
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import TruckInfoLeftPane from './TruckInfoLeftPane.jsx';
import CartContainer from './CartContainer.jsx';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';

class TruckInfo extends React.Component {

  componentDidMount() {
    this.props.fetchTruckInfo('');
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
      <Grid>
        <Row>
          <Header />
        </Row>
        <Row >
          <TruckInfoLeftPane />
          <CartContainer />
        </Row>
      </Grid>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTruckInfo: (truckID) => dispatch(truckInfoFetchData(truckID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckInfo);
