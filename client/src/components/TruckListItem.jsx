import React, { Component } from 'react';
import { Col, Label, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TruckListItem extends Component {

  render() {
    const info = this.props.restaurant;

    return (
      <ListGroupItem className="trucklist-group" >
        <Link to="/truckMenu">
          <Col xs={12} md={4} style={{ textAlign: 'center' }}>
            <img src={info.image} style={{ maxHeight: '90px' }} alt={`${info.name}-img`} />
          </Col>
          <Col xs={12} md={8}>
            <Col xs={6} md={8}>
              <h2>{ info.name }</h2>
              <div>{ info.genre }</div>
              <div>{ info.description }</div>
            </Col>
            <Col xs={6} md={4} className="trucklist-rating">
              <Label bsStyle="default" style={{ fontSize: '2.5em' }}>
                { info.rating }
              </Label>
            </Col>
          </Col>
        </Link>
      </ListGroupItem>
    );
  }
}


export default TruckListItem;
