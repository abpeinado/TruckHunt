// Page that a user sees when they click on a TruckListItem
// will be composed of a number of components that I haven't yet outlined,
// but will probably need a title, an image, and a menu at least
import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
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
          <Col xs={12} md={8}>
            <TruckInfoLeftPane />
          </Col>
          <Col xs={6} md={4}>
            <Cart />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default TruckInfo;
