import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { AreaChart, Legend, BarChart, Bar, Area, CartesianGrid, Tooltip, YAxis, XAxis } from 'recharts';
import { connect } from 'react-redux';
import VendorHeader from './VendorHeader.jsx';

class VendorAnalytics extends Component {

  render() {
    return (
      <div>
        <VendorHeader />
        <Grid>
        <Row>
         <h2 style={{textAlign:"center"}}>
            Analytics
          </h2>
        </Row>
        <Row>
        <Col md={6}>
         <h2 style={{textAlign:"center"}}>
            Average Price
          </h2>
           <AreaChart
            width={600}
            height={400}
            data={this.props.vendorIncomingOrder}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}
          >
            <Area type='monotone' dataKey='price_total' stroke='#8884d8' fill='#8884d8' />
            <Tooltip/>
            <CartesianGrid strokeDasharray="3 3" />
          </AreaChart>

        </Col>
        <Col md={6}>
          <h2 style={{textAlign:"center"}}>
            Average Order Delivery Status
          </h2>
          <BarChart width={600} height={400} data={this.props.vendorIncomingOrder}>
            <XAxis dataKey="order_status" />
            <YAxis dataKey="order_time" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="order_time" fill="#8884d8" />
          </BarChart>

        </Col>
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
