import React, { Component } from 'react';
import { Col, Label, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { mapCenterUpdate } from '../actions/mapCenterActions.js';


class TruckListItem extends Component {

  render() {
    const info = this.props.restaurant;

    return (
      <ListGroupItem className="trucklist-group" >
          <Col xs={12} sm={4} style={{ textAlign: 'center' }}>
            <img src={info.image} style={{ maxHeight: '90px' }} alt={`${info.name}-img`} />
          </Col>
          <Col xs={12} sm={8}>
            <Col xs={9} sm={8}>
              <h2>{ info.name }</h2>
              <div><h4>{ info.genre }</h4></div>
              <div><p>{ info.description }</p></div>
            </Col>
            <Col xs={3} sm={3} className="trucklist-rating">
              <Label bsStyle="default" style={{ fontSize: '2.5em' }}>
                { info.rating }
              </Label>
            </Col>
          </Col>
      </ListGroupItem>
    );
  }
}


export default TruckListItem;

