/* eslint-disable no-unused-expressions */

import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import TruckInfoLeftPane from './TruckInfoLeftPane.jsx';
import CartContainer from './CartContainer.jsx';
import TrunkInfoSummary from './TruckInfoSummary.jsx';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';

class TruckInfo extends React.Component {

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
          <TrunkInfoSummary />
          <Grid className="gridWrapper">
            <TruckInfoLeftPane />
            <CartContainer />
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
// export default TruckInfo;
