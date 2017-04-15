import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, ListGroup } from 'react-bootstrap';
import { truckListFetchData } from '../actions/truckListActions.js';
import TruckListItem from './TruckListItem.jsx';

class TruckList extends Component {

  componentDidMount() {
    this.props.truckListFetchData('/truckList');
  }

  render() {
    if (this.props.truckListHasErrored) {
      return <p>Sorry! There was an error loading today's trucks!</p>;
    }
    if (this.props.truckListIsLoading) {
      return <p>Loading…</p>;
    }
    return (
      <Col className={'TruckListClass'} xs={12} md={8}>
        TruckList
        <ListGroup>
          {this.props.truckList.map((item, i) =>
            <TruckListItem restaurant={item} key={i} />
          )}
        </ListGroup>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckList: state.truckList,
    truckListHasErrored: state.truckListHasErrored,
    truckListIsLoading: state.truckListIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    truckListFetchData: (url) => dispatch(truckListFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);
