import React from 'react';
import { Row, Grid } from 'react-bootstrap';
import Header from './Header.jsx';
import TruckInfoLeftPane from './TruckInfoLeftPane.jsx';
import Cart from './Cart.jsx';

const TruckInfo = () => {
  return (
    <Grid>
      <Row>
        <Header />
      </Row>
      <Row >
        <TruckInfoLeftPane />
        <Cart />
      </Row>
    </Grid>
  );
};

export default TruckInfo;
