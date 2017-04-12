import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import TruckListItem from './TruckListItem.jsx';
// on homepage, contains TruckListItems


const TruckList = () => {
  const truckData = [
    {
      name: 'Los Pollos Hermanos',
      genre: 'Mexican',
      description: 'This is a great little mexican joint',
      rating: '4/5',
      image: 'https://s3-us-west-1.amazonaws.com/zollstorage/thesis/LogoV1.png'
    },
    {
      name: 'Sush Tush',
      genre: 'Japanese',
      description: 'This is a great sushi shop',
      rating: '3/5',
      image: 'https://s3-us-west-1.amazonaws.com/zollstorage/thesis/LogoV1.png'
    },
    {
      name: 'Royal with Cheese',
      genre: 'American',
      description: 'Famous for the Marsellus Wallace"s Wife Burger',
      rating: '5/5',
      image: 'https://s3-us-west-1.amazonaws.com/zollstorage/thesis/LogoV1.png'
    }];

  return (
    <Col className={'TruckListClass'} xs={12} md={8}>
      TruckList
      <ListGroup>
        {truckData.map((item, i) =>
          <TruckListItem restaurant={item} key={i} />
      )}
      </ListGroup>
    </Col>
  );
};

export default TruckList;
