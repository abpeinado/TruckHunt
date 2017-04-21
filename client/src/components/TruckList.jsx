/* eslint-disable no-unused-expressions */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, ListGroup } from 'react-bootstrap';
import { truckListFetchData } from '../actions/truckListActions.js';
import { truckSelectedUpdate } from '../actions/truckSelectedActions.js';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';
import TruckListItem from './TruckListItem.jsx';


class TruckList extends Component {

  componentWillReceiveProps() {
    // this.props.truckListFetchData('/truckList');
    this.props.truckList;
    // console.log('got trucks for list');
  }

  render() {
    return (
      <Row>
        <Col xs={12} md={8} mdOffset={2} className={'TruckListClass'} >
          <ListGroup >
            {this.props.truckList === undefined ? null :
            (this.props.truckList.map((item, i) =>
              <div key={i} onClick={() => { this.props.truckSelectedUpdate(item); this.props.truckInfoFetchData(item.food_category); }} >
              <Link to="/truckMenu" >
                <TruckListItem restaurant={item} />
              </Link>
              </div>
            ))
          }
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckList: state.truckList,
    truckSelected: state.truckSelected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    truckSelectedUpdate: (truck) => dispatch(truckSelectedUpdate(truck)),
    truckListFetchData: (url) => dispatch(truckListFetchData(url)),
    truckInfoFetchData: (truckCategory) => dispatch(truckInfoFetchData(truckCategory))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);
