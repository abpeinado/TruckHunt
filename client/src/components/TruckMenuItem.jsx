import React from 'react';
import { Button, Card } from 'semantic-ui-react';

const TruckMenuItem = ({ item, onAddToCartClicked }) => {
  const { name, item_description, price } = item;
  const priceAsString = price.toString();
  const priceWithDecimals = `${priceAsString.slice(0, priceAsString.length - 2)}.${priceAsString.slice(priceAsString.length - 2)}`;

  return (
    <Card color="orange" className="animated slideInUp">
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>&#36;{priceWithDecimals}</Card.Meta>
        <Card.Description>{item_description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic floated="right" size="mini" icon="plus" color="orange" onClick={onAddToCartClicked} />
      </Card.Content>
    </Card>
  );
};

export default TruckMenuItem;
