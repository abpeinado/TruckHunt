import React, { Component } from 'react';
import { Col, Label, Button, ButtonToolbar, ButtonGroup, Panel, Accordion, Well, Row } from 'react-bootstrap';

class IncomingItem extends Component {

  render() {
    const order = this.props.incomingOrder;
    const incomingOrderHeader = (
      <Col xs={12}>
        <Col xs={3}>
          <h5>
            {order.orderNo}
          </h5>
          <h2>
            {order.customerName}
          </h2>
        </Col>
        <Col xs={3}>
          <h5>
          Total
          </h5>
          <h2>
            {order.totalPaid}
          </h2>
        </Col>
        <Col xs={6}>
          <Col xs={6}>
            <h5>
            Ordered
            </h5>
            <h2>
              {order.numberOfItems} Items
            </h2>
          </Col>
          <Col xs={6} style={{ 'padding-top': '16px', 'padding-left': '3em' }}>
            <Label bsStyle="success" style={{ fontSize: '2em' }}>
              {order.orderTime}
            </Label>
            <div style={{ 'padding-top': '16px' }}>MIN AGO</div>
          </Col>
        </Col>
      </Col>
    );

    const incomingOrderMenuItem = (
      <Well className="incomingOrderMenuItem">
        <Col xs={3}>
          <h2>
          4
          </h2>
        </Col>
        <Col xs={6}>
          <h2>
          Kale Salad
          </h2>
          <h5>
          -No Goat Cheese
          </h5>
        </Col>
        <Col xs={3}>
          <h2>
          $20.00
          </h2>
        </Col>
      </Well>
    );

    return (
      <Accordion >
        <Panel header={incomingOrderHeader} className="incomingOrderHeaderStyle">
          <Row>
            <Col xs={8}>
              {incomingOrderMenuItem}
              {incomingOrderMenuItem}
              {incomingOrderMenuItem}
            </Col>
            <Col xs={4} style={{ fontSize: '2.5em' }}>
              <div>
                <ButtonToolbar>
                  <ButtonGroup bsSize="large" vertical block>
                    <Button bsStyle="success" style={{ height: '6em' }} >ON-TIME</Button>
                    <Button bsStyle="default" style={{ height: '6em' }} >DELAYED</Button>
                    <Button bsStyle="primary" style={{ height: '11.2em' }} >READY FOR PICKUP</Button>
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

export default IncomingItem;
