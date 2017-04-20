import React, { Component } from 'react';
import { Col, Label, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { mapCenterUpdate } from '../actions/mapActions.js';


class TruckListItem extends Component {

  render() {
    const info = this.props.restaurant;
    const random = (Math.floor(Math.random() * 4) + 1);
    const image = `https://s3-us-west-1.amazonaws.com/zollstorage/MapMarker(large)V${random}.png`;

    return (
      <ListGroupItem className="trucklist-group" >
        <Col xs={12} sm={4} style={{ textAlign: 'center' }}>
          <img src={image} style={{ maxHeight: '90px' }} alt={`${info.vendor_name}-img`} />
        </Col>
        <Col xs={12} sm={8}>
          <Col xs={9} sm={8}>
            <h2>{ info.vendor_name }</h2>
            <div><h4>{ info.food_category }</h4></div>
          </Col>
          <Col xs={3} sm={3} className="trucklist-rating">
            <Label bsStyle="default" style={{ fontSize: '2.5em' }}>
              4/5
            </Label>
          </Col>
        </Col>
      </ListGroupItem>
    );
  }
}


export default TruckListItem;

