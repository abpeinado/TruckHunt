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
      food.forEach((item => {
        if (item === ':') {
          foodDescription += ',';
        } else {
          foodDescription += item;
        }
      }
    ));
    } else {
      for (let i = 0; i < 50; i++) {
        if (food[i] === ':') {
          foodDescription += ',';
        } else {
          foodDescription += food[i];
        }
      }
    }

    return (
      <div className="truckCard">
        <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/200X.png" shape="rounded" label={labelContent} fluid />
        <div className="truckCardtext">
          { foodDescription }
        </div>
      </div>
    );
  }
}


export default TruckListItem;

