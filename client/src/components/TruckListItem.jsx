import React from 'react';
import { Col, Label, ListGroupItem } from 'react-bootstrap';

// on homepage, contains TruckListItems

class TruckListItem extends React.Component {


  render () {
    const info = this.props.restaurant;
    return (
      <ListGroupItem className='trucklist-group' >
        <Col s={6} md={3} style={{ 'textAlign':'center' }}>
          <img src={ info.image } style={{ 'maxHeight':'90px' }} />
        </Col>
        <Col md={8}>
          <Col s={6} md={8}>
            <h2>{ info.name }</h2>
            <div>{ info.genre }</div>
            <div>{ info.description }</div>
          </Col>
          <Col s={6} md={4} className='trucklist-rating'>
            <Label bsStyle="default" style={{ 'fontSize':'2.5em' }}>
              { info.rating }
            </Label>
          </Col>
        </Col>
      </ListGroupItem>
    );
  }
}

export default TruckListItem;

// Part of TruckList
// Contains:
//   -truckListItemDescription
//   -TruckListItemRating

// (will also have an image, though for now I don't see a good
// reason to make that a seperate react component)
