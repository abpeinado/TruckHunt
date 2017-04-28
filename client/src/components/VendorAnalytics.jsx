import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { Statistic, Message } from 'semantic-ui-react';
import { AreaChart, Legend, BarChart, Bar, Area, CartesianGrid, Tooltip, YAxis, XAxis } from 'recharts';
import { connect } from 'react-redux';
import VendorHeader from './VendorHeader.jsx';
import utils from '../utils.js';


class VendorAnalytics extends Component {

  render() {
    const data = this.props.vendorIncomingOrder;
    let totalRev = 0;
    let totalOrders = 0;
    data.map((item) => {
      totalOrders += 1;
      totalRev += item.price_total;
    })
    let averageOrder = utils.formatCentsToDollars(totalRev) / totalOrders;

    return (
      <div>
        <VendorHeader />
        <Grid>
        <Row>
         <h1 style={{textAlign:"center",  "padding-bottom": "1em"}}>
            Analytics
          </h1>
        </Row>
        <Row>
          <Message style={{ height: "10em" }}>
            <Col md={6} style={{textAlign:"center", "padding-bottom": "4em"}}>
              <Statistic size="huge">
                <Statistic.Value>${utils.formatCentsToDollars(totalRev)}</Statistic.Value>
                <Statistic.Label>Monthly Revenue</Statistic.Label>
              </Statistic>
            </Col>
            <Col md={6} style={{textAlign:"center"}}>
              <Statistic size="huge">
                <Statistic.Value>{totalOrders}</Statistic.Value>
                <Statistic.Label>Orders This Month</Statistic.Label>
              </Statistic>
            </Col>
          </Message>
        </Row>
        <Row style={{"padding-bottom": "4em"}} >
          <Col md={6}>
            <Message>
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}
              >
                <Area type='monotone' dataKey='price_total' stroke='#FFA500' fill='#FFA500' />
                <Tooltip/>
                <CartesianGrid strokeDasharray="3 3" />
              </AreaChart>
              <h2 style={{ textAlign:"center" }}>
                Average Price
              </h2>
            </Message>

          </Col>
          <Col md={6}>
            <Message>
              <BarChart width={500} height={300} data={data}>
                <XAxis dataKey="order_status" />
                <YAxis dataKey="order_time" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="order_time" fill="#FFA500" />
              </BarChart>
              <h2 style={{textAlign:"center"}}>
                Average Order Delivery Status
              </h2>
            </Message>
          </Col>
        </Row>
         <Row>
          <Message style={{ height: "10em" }}>
            <Col md={12} style={{textAlign:"center", "padding-bottom": "4em"}}>
              <Statistic size="huge">
                <Statistic.Value>${averageOrder}</Statistic.Value>
                <Statistic.Label>Average Price Per Order</Statistic.Label>
              </Statistic>
            </Col>
          </Message>
        </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendorIncomingOrder: state.vendorIncomingOrder,
    vendorIncomingOrderHasErrored: state.vendorIncomingOrderHasErrored,
    vendorIncomingOrderIsLoading: state.vendorIncomingOrderIsLoading,
    setUserID: state.setUserID
  };
};
export default connect(mapStateToProps, null)(VendorAnalytics);
