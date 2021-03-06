import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const TruckMenuItem = ({ item, onAddToCartClicked }) => {
  const { name, item_description, price } = item;
  const priceAsString = price.toString();
  const priceWithDecimals = `${priceAsString.slice(0, priceAsString.length - 2)}.${priceAsString.slice(priceAsString.length - 2)}`;

  return (
    <Card color="orange" className="animated fadeIn">
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>&#36;{priceWithDecimals}</Card.Meta>
        <Card.Description>{item_description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to="/truckMenu" >
          <Button basic floated="right" size="mini" icon="plus" color="orange" onClick={onAddToCartClicked} />
        </Link>
      </Card.Content>
    </Card>
  );
};

export default TruckMenuItem;
