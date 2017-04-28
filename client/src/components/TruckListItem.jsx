/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
// import { Rating } from 'semantic-ui-react';
import { Image, Label } from 'semantic-ui-react';

class TruckListItem extends Component {
    constructor(props) {
    super(props);
    this.state = {
      randomNum: this.props.random
    };

  }

  render() {
    const info = this.props.restaurant;
    const random = (Math.floor(Math.random() * 3) + 1);
    const image = `https://s3-us-west-1.amazonaws.com/zollstorage/MapMarker(large)V${2}.png`;
    const panelCss = {
      maxHeight: '200px'
    };
    const labelContent = { as: 'a', color: 'orange', content: info.vendor_name, icon: 'hotel', ribbon: true };
    const food = info.food_category.split('');
    let foodDescription = '';

    const catObj = {
      'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks': 1,
      'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls' : 2,
      'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages': 3,
      'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins': 4,
      'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages': 5,
      'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages': 6,
      'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.': 7,
      'Hot Dogs: Hamburgers: Nachos: Steaks: Pastas: Asian Dishes: Tri-Tip Sandwiches: Sodas & Water': 8
    };
    console.log('IMAGE TEST', catObj[info.food_category]);

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

    let foodCategory = catObj[info.food_category];

    if (typeof foodCategory !== 'number') {
      foodCategory = 1;
    }

    return (
      <div className="truckCard">
        <Image src={`https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/square/${foodCategory}_${1}.jpg`} shape="rounded" label={labelContent} fluid />
        <div className="truckCardtext">
          { foodDescription }
        </div>
      </div>
    );
  }
}

export default TruckListItem;
