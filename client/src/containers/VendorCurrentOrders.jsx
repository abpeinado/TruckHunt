/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Image, Row } from 'react-bootstrap';
import Header from '../components/VendorHeader.jsx';
import { vendorIncomingOrderFetchData, foundOrders } from '../actions/vendorIncomingOrderActions.js';
import IncomingItem from './VendorCurrentOrderIncomingItem.jsx';
import ReadyItem from './VendorCurrentOrderReadyItem.jsx';

class VendorCurrentOrders extends Component {

  componentWillUpdate() {
    if (!this.props.foundOrders) {
      console.log('SET USER ID', this.props.setUserID);
      this.props.FetchVendorOrders('/vendorIncomingOrders', this.props.setUserID);
      this.props.FoundOrdersOnce(true);
    }
  }

  render() {
    if (this.props.vendorIncomingOrderHasErrored) {
      return (
        <div>
          <Header />
          <Grid fluid >
            <Row className="truckDetailText">
              <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/Truck_Loading.gif" />
              <h2 className="textCenter">
                Oops! There was an error loading the incoming orders!
              </h2>
            </Row>
          </Grid>
        </div>
      );
    }
    if (this.props.vendorIncomingOrderIsLoading) {
      return (
        <div>
          <Header />
          <Grid fluid >
            <Row className="truckDetailText">
              <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/Truck_Loading.gif" />
              <h2 className="textCenter">
                Loading Orders...
              </h2>
            </Row>
          </Grid>
        </div>
      );
    }
    return (
      <div>
        <Col xs={12} md={8}>
          <h2 className="textCenter">INCOMING ORDERS</h2>
          {this.props.vendorIncomingOrder.map((item, i) => {
            if (item.order_status < 2) {
              return <IncomingItem incomingOrder={item} key={i} />;
            }
          }
          )}
        </Col>
        <Col className="textCenter" xs={12} md={4}>
          <h2>READY FOR PICKUP</h2>
          {this.props.vendorIncomingOrder.map((item, i) => {
            if (item.order_status === 2) {
              return <ReadyItem incomingOrder={item} key={i} />;
            }
          }
          )}
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendorIncomingOrder: state.vendorIncomingOrder,
    vendorIncomingOrderHasErrored: state.vendorIncomingOrderHasErrored,
    vendorIncomingOrderIsLoading: state.vendorIncomingOrderIsLoading,
    setUserID: state.setUserID,
    foundOrders: state.foundOrders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchVendorOrders: (url, id) => dispatch(vendorIncomingOrderFetchData(url, id)),
    FoundOrdersOnce: (found) => dispatch(foundOrders(found))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorCurrentOrders);
