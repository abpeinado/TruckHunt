import React, { Component } from 'react';
import { Card, Icon, Image, Rating } from 'semantic-ui-react';

class TruckListItem extends Component {

  render() {
    const info = this.props.restaurant;
    const random = (Math.floor(Math.random() * 4) + 1);
    const image = `https://s3-us-west-1.amazonaws.com/zollstorage/MapMarker(large)V${random}.png`;

    return (
      <Card className="trucklist-group" >
        <Card.Content>
          <Image src={image} style={{ maxHeight: '90px' }} alt={`${info.vendor_name}-img`} />
          <Card.Header>
            { info.vendor_name }
          </Card.Header>
          <Card.Description>
            { info.food_category }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="like outline" />
            Rating
          </a>
          <Rating maxRating={5} defaultRating={4} icon="star" size="large" />
        </Card.Content>
      </Card>
    );
  }
}


export default TruckListItem;

