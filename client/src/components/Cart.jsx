import React from 'react';
import { Col, Row } from 'react-bootstrap';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col md={4} className="cart">
        <Row>
          <h4 className="cart-title"> Cart! </h4>
        </Row>
      </Col>
    );
  }
}

export default Cart;
