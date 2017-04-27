import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Label, Button, ButtonToolbar, ButtonGroup, Panel, Accordion, Row } from 'react-bootstrap';
import moment from 'moment';
import { vendorIncomingOrderUpdate } from '../actions/vendorIncomingOrderActions.js';
import MenuItem from './vendorOrderMenuItem.jsx';
import utils from '../utils.js';

class IncomingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelay = this.handleDelay.bind(this);
    this.handleReady = this.handleReady.bind(this);
    this.handleOnTime = this.handleOnTime.bind(this);
  }

  handleReady() {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderStatus: 'READY',
        orderID: this.props.incomingOrder.order_id
      })
    };

    fetch('/orderStatus', init)
      .then(res => res.json())
      .then((response) => {
        console.log('response from fetch', response);
        return response;
      })
      .then((vendorIncomingOrders) => { this.props.vendorIncomingOrderUpdate(vendorIncomingOrders); })
      .catch((err) => {
        console.log('error from fetch vendorcurrentorder', err);
      });
  }

  handleDelay() {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderStatus: 'DELAYED',
        orderID: this.props.incomingOrder.order_id
      })
    };

    fetch('/orderStatus', init)
      .then(res => res.json())
      .then((response) => {
        console.log('response from fetch', response);
        return response;
      })
      .then((vendorIncomingOrders) => { this.props.vendorIncomingOrderUpdate(vendorIncomingOrders); })
      .catch((err) => {
        console.log('error from fetch vendorcurrentorder', err);
      });
  }

  handleOnTime() {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderStatus: 'ONTIME',
        orderID: this.props.incomingOrder.order_id
      })
    };

    fetch('/orderStatus', init)
      .then(res => res.json())
      .then((response) => {
        return response;
      })
      .then((vendorIncomingOrders) => {
        this.props.vendorIncomingOrderUpdate(vendorIncomingOrders);
      })
      .catch((err) => {
        console.error(err);
      });
  }


  render() {
    const time = moment(this.props.incomingOrder.order_time).format('llll');
    const timeFormatted = moment(time).fromNow();

    const order = this.props.incomingOrder;
    const incomingOrderHeader = (
      <Col xs={12}>
        <Col xs={3}>
          <h5>
            {order.order_id}
          </h5>
          <h2>
            {order.customer_email}
          </h2>
        </Col>
        <Col xs={3}>
          <h5>
          Total
          </h5>
          <h2>
            ${utils.formatCentsToDollars(order.price_total)}
          </h2>
        </Col>
        <Col xs={6}>
          <Col xs={6}>
            <h5>
            Ordered
            </h5>
            <h2>
              {order.items.length} Items
            </h2>
          </Col>
          <Col xs={6} style={{ 'padding-top': '16px', 'padding-left': '3em' }}>
            <Label bsStyle="success" style={{ fontSize: '2em' }}>
              {timeFormatted}
            </Label>
          </Col>
        </Col>
      </Col>
    );
    const statusColor = { 0: 'success', 1: 'warning', 2: 'primary' };

    return (
      <Accordion >
        <Panel header={incomingOrderHeader} bsStyle={statusColor[order.order_status]} className="incomingOrderHeaderStyle">
          <Row>
            <Col xs={8}>
              {this.props.incomingOrder.items.map((item, i) =>
                <MenuItem incomingOrder={item} key={i} />
              )}
            </Col>
            <Col xs={4} style={{ fontSize: '2.5em' }}>
              <div>
                <ButtonToolbar>
                  <ButtonGroup bsSize="large" vertical block>
                    <Button onClick={this.handleOnTime} bsStyle="success" style={{ height: '6em' }} >ON-TIME</Button>
                    <Button onClick={this.handleDelay} bsStyle="default" style={{ height: '6em' }} >DELAYED</Button>
                    <Button onClick={this.handleReady} bsStyle="primary" style={{ height: '11.2em' }} >READY FOR PICKUP</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
            </Col>
          </Row>
        </Panel>
      </Accordion>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    vendorIncomingOrderUpdate: (vendorIncomingOrders) => dispatch(vendorIncomingOrderUpdate(vendorIncomingOrders))
  };
};

export default connect(null, mapDispatchToProps)(IncomingItem);
