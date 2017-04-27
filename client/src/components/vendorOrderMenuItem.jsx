import React from 'react';
import { Well, Col } from 'react-bootstrap';
import utils from '../utils.js';

const menuItem = (props) => (
  <Well className="incomingOrderMenuItem">
    <Col xs={3}>
      <h2>
        { props.incomingOrder.quantity }
      </h2>
    </Col>
    <Col xs={6}>
      <h2>
        { props.incomingOrder.name }
      </h2>
      <h5>
        { props.incomingOrder.item_note }
      </h5>
    </Col>
    <Col xs={3}>
      <h2>
        ${ utils.formatCentsToDollars(props.incomingOrder.price) }
      </h2>
    </Col>
  </Well>
);

export default menuItem;
