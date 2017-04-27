/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
// import { Rating } from 'semantic-ui-react';
import { Image, Label } from 'semantic-ui-react';


class TruckListItem extends Component {

  render() {
    const info = this.props.restaurant;
    const random = (Math.floor(Math.random() * 4) + 1);
    const image = `https://s3-us-west-1.amazonaws.com/zollstorage/MapMarker(large)V${2}.png`;
    const panelCss = {
      maxHeight: '200px'
    };
    const labelContent = { as: 'a', color: 'orange', content: info.vendor_name, icon: 'hotel', ribbon: true };
    const food = info.food_category.split('');
    let foodDescription = '';

    if (food.length < 50) {
      food.forEach((item => {foodDescription += item}));
    } else {
      for ( let i = 0; i < 50; i++ ) {
        foodDescription += food[i];
      };
    }
    console.log('food length', foodDescription)

    return (
      <div className="truckCard">
      <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/200X.png" shape='rounded' label={labelContent} fluid />
        <div className="truckCardtext">
          { foodDescription }
        </div>
      </div>
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