/* eslint-disable no-unused-expressions */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Well, Image } from 'react-bootstrap';
import { truckListFetchData } from '../actions/truckListActions.js';
import { truckSelectedUpdate } from '../actions/truckSelectedActions.js';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';
import { mapMarkerUpdate, mapCenterUpdate } from '../actions/mapActions.js';
import TruckListItem from '../components/TruckListItem.jsx';

class TruckList extends Component {

  componentWillReceiveProps() {
    this.props.truckList;
  }

  render() {
    const random = (Math.floor(Math.random() * 3) + 1);

    return (
      <div>
        <Row className="truckListScroll">
          {this.props.truckList === undefined || this.props.truckList.length < 1 ? (
            <Well>
              <Image className="textCenter" src={'https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/truck_error.gif'} />
              <h1 className="truckListText">
              Looks like theres no trucks currently available! Try searching again with a different time!
              </h1>
            </Well>
            ) :
            (this.props.truckList.map((item, i) =>
              <Link to="/truckDetail" key={i} onMouseOver={() => { this.props.mapMarkerUpdate(item); }} onClick={() => { this.props.truckSelectedUpdate(item); this.props.truckInfoFetchData(item.food_category); }}>
                <Col md={6} sm={6}>
                  <TruckListItem restaurant={item} key={i} random={random} />
                </Col>
              </Link>
            ))
          }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckList: state.truckList,
    truckSelected: state.truckSelected,
    mapMarkerSelected: state.mapMarkerSelected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapMarkerUpdate: (mapMarker) => dispatch(mapMarkerUpdate(mapMarker)),
    truckSelectedUpdate: (truck) => dispatch(truckSelectedUpdate(truck)),
    truckListFetchData: (url) => dispatch(truckListFetchData(url)),
    truckInfoFetchData: (truckCategory) => dispatch(truckInfoFetchData(truckCategory)),
    mapCenterUpdate: (coordinates) => dispatch(mapCenterUpdate(coordinates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);
