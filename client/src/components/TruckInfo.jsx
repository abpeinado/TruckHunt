import React from 'react';
import { Row, Grid } from 'react-bootstrap';
import Header from './Header.jsx';
import TruckInfoLeftPane from './TruckInfoLeftPane.jsx';
import Cart from './Cart.jsx';

class TruckInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsLogin: false
    };
  }

  render() {
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
  }
}

export default TruckInfo;
