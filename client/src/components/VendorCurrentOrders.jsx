/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { vendorIncomingOrderFetchData, foundOrders } from '../actions/vendorIncomingOrderActions.js';
import IncomingItem from './VendorCurrentOrderIncomingItem.jsx';
import ReadyItem from './VendorCurrentOrderReadyItem.jsx';

class VendorCurrentOrders extends Component {

  // componentDidMount() {
  //   this.props.FetchVendorOrders('/vendorIncomingOrders', 74);
  //   this.props.FoundOrdersOnce(true);
  //   console.log('found orders: ', this.props.foundOrders);
  // }

  componentWillUpdate() {
    if (!this.props.foundOrders) {
      console.log('SET USER ID', this.props.setUserID);
      this.props.FetchVendorOrders('/vendorIncomingOrders', this.props.setUserID);
      this.props.FoundOrdersOnce(true);
    }
  }

  render() {
    if (this.props.vendorIncomingOrderHasErrored) {
      return <p>Oops! There was an error loading the incoming order</p>;
    }
    if (this.props.vendorIncomingOrderIsLoading) {
      return <p>Loading Incoming Orders…</p>;
    }
    return (
      <div>
        <Col xs={12} md={8}>
          <h2 style={{ textAlign: 'center' }}>INCOMING ORDERS</h2>
          {this.props.vendorIncomingOrder.map((item, i) => {
            if (item.order_status < 2) {
              return <IncomingItem incomingOrder={item} key={i} />;
            }
          }
          )}
        </Col>
        <Col style={{ textAlign: 'center' }} xs={12} md={4}>
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
