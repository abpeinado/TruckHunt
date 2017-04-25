import React, { Component } from 'react';
import { Col, Label, Button, ButtonToolbar, ButtonGroup, Panel, Accordion, Row } from 'react-bootstrap';
import moment from 'moment';
import MenuItem from './vendorOrderMenuItem.jsx';

class ReadyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete(event) {
    console.log('inside handleComplete', event.target);
    console.log('inside handleComplete', this);
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderStatus: 'COMPLETE',
        orderID: this.props.incomingOrder.order_id // ADD ORDER ID HERE this.props.incomingOrder.orderNo
      })
    };
    fetch('/orderStatus', init)
      .then((response) => {
        console.log('response from fetch', response);
      })
      .catch((err) => {
        console.log('error from fetch vendorcurrentorder', err);
      });
  }

  render() {
    const time = moment(this.props.incomingOrder.order_time).format('llll');
    const timeFormatted = moment(time).fromNow();

    const order = this.props.incomingOrder;
    const readyOrderHeader = (
      <Col xs={12} style={{ textAlign: 'left' }}>
        <Col xs={6} style={{ 'padding-top': '16px' }}>
          <h3>
            {order.order_id}
          </h3>
          <h2>
          {order.customer_email}
          </h2>
        </Col>
        <Col xs={6} style={{ 'padding-top': '16px', 'padding-left': '3em' }}>
          <Label bsStyle="success" style={{ fontSize: '2em' }}>
            {timeFormatted}
          </Label>
        </Col>
      </Col>
    );
    const statusColor = { 0: 'success', 1: 'warning', 2: 'primary' };

    return (
      <Accordion >
        <Panel header={readyOrderHeader} bsStyle={statusColor[order.order_status]} className="incomingOrderHeaderStyle">
          <Row style={{ color: 'black' }} >
            <Col xs={8}>
            <h2>
              {order.customer_email}
            </h2>
             <h5>
            Ordered
            </h5>
            <h2>
              {order.items.length} Items
            </h2>
              {this.props.incomingOrder.items.map((item, i) =>
                <MenuItem incomingOrder={item} key={i} />
              )}
            </Col>
            <Col xs={4} style={{ fontSize: '2.5em' }}>
              <div>
                <ButtonToolbar>
                  <ButtonGroup bsSize="large" vertical block>
                    <Button onClick={this.handleComplete} bsStyle="primary" style={{ height: '12em' }} >Complete</Button>
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

export default ReadyItem;
