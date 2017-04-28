/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { Image, Label, Card, Grid, Rating } from 'semantic-ui-react';

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
    const vendorName = info.vendor_name.split('');
    let foodDescription = '';
    let vendor = '';

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

    if (vendorName.length < 20) {
      vendorName.forEach((item => {
        if (item === ':') {
          vendor += ',';
        } else {
          vendor += item;
        }
      }
    ));
    } else {
      for (let i = 0; i < 20; i++) {
        if (vendorName[i] === ':') {
          vendor += ',';
        } else {
          vendor += vendorName[i];
        }
      }
    }

    if (food.length < 20) {
      food.forEach((item => {
        if (item === ':') {
          foodDescription += ',';
        } else {
          foodDescription += item;
        }
      }
    ));
    } else {
      for (let i = 0; i < 20; i++) {
        if (food[i] === ':') {
          foodDescription += ',';
        } else {
          foodDescription += food[i];
        }
      }
    }


    let foodCategory = catObj[info.food_category];

    if (typeof foodCategory !== 'number') {
      foodCategory = 2;
    }

    let start = info.start_time;
    let end = info.end_time;

    if (start < 12) {
      start += ' AM';
    } else if (start === 12) {
      start += ' PM';
    } else {
      start -= 12;
      start += ' PM';
    }

    if (end < 12) {
      end += ' AM';
    } else if (end === 12) {
      end += ' PM';
    } else {
      end -= 12;
      end += ' PM';
    }

    return (
        <Card className="truckCard">
          <Image fluid src={`https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/square/${foodCategory}_${3}.jpg`} />
          <Card.Content>
            <Card.Header style={{ color: "#fff" }}>{ vendor }</Card.Header>
            <Card.Meta>{ foodDescription }...</Card.Meta>
          </Card.Content>
          <Card.Content extra>
          <Grid>
            <Grid.Column width={6}>
              <Rating icon='star' defaultRating={info.rating} maxRating={5} />
            </Grid.Column>
            <Grid.Column width={10}>
              <Label color="orange" >Open {start} to {end}</Label>
            </Grid.Column>
          </Grid>
          </Card.Content>
        </Card>
    );
  }
}

export default TruckListItem;

