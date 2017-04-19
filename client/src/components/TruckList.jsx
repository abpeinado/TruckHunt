import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, ListGroup } from 'react-bootstrap';
import { truckListFetchData } from '../actions/truckListActions.js';
import { truckSelectedUpdate } from '../actions/truckSelectedActions.js';
import { Link } from 'react-router-dom';
import TruckListItem from './TruckListItem.jsx';

class TruckList extends Component {

  componentDidMount() {
    this.props.truckListFetchData('/truckList');
    console.log('got trucks');
  }

  render() {
    return (
      <Row>
        <Col xs={12} md={8} mdOffset={2} className={'TruckListClass'} >
          <ListGroup >
            {console.log('should be truck arr', this.props.truckList)}
            { this.props.truckList === undefined ? null :
              (this.props.truckList.map((item, i) =>
              <Link to="/truckMenu" onClick={() => { this.props.truckSelectedUpdate(item); }} >
                <TruckListItem restaurant={item} key={i} />
              </Link>
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
    truckListFetchData: (url) => dispatch(truckListFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);