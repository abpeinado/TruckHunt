import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, ListGroup } from 'react-bootstrap';
import { truckListFetchData } from '../actions/truckListActions.js';
import TruckListItem from './TruckListItem.jsx';

class TruckList extends Component {

  render() {
    return (
      <Row>
        <Col xs={12} md={8} mdOffset={2} className={'TruckListClass'} >
          <ListGroup >
            {this.props.truckList.map((item, i) =>
              <TruckListItem restaurant={item} key={i} />
            )}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckList: state.truckList
  };
};

export default connect(mapStateToProps)(TruckList);
