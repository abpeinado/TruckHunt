/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react';
import { ListGroupItem, Panel, Thumbnail, Button } from 'react-bootstrap';


class TruckListItem extends Component {

  render() {
    const info = this.props.restaurant;
    const random = (Math.floor(Math.random() * 4) + 1);
    const image = `https://s3-us-west-1.amazonaws.com/zollstorage/MapMarker(large)V${2}.png`;
    const panelCss = {
      maxHeight: '200px'
    };

    return (

      <Thumbnail src={image} alt={`img-${info.vendor_name}`} style={{ 'padding-bottom': '25px' }} >
        <div >
          <h3>{ info.vendor_name }</h3>
          <p>{ info.food_category }</p>
          <Rating maxRating={5} defaultRating={info.rating} icon="star" size="large" />
        </div>
      </Thumbnail>

    );
  }
}


export default TruckListItem;

  // <Card className="animated slideInUp trucklist-group" >
  //         <Card.Content>
  //           <Image src={image} style={{ maxHeight: '90px' }} alt={`${info.vendor_name}-img`} />
  //           <Card.Header>
  //             { info.vendor_name }
  //           </Card.Header>
  //           <Card.Description>
  //             { info.food_category }
  //           </Card.Description>
  //         </Card.Content>
  //         <Card.Content extra>
  //           <a>
  //             <Icon name="like outline" />
  //             Rating
  //           </a>
  //           <Rating maxRating={5} defaultRating={info.rating} icon="star" size="large" />
  //         </Card.Content>
  //       </Card>