import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { vendorIncomingOrderFetchData } from '../actions/vendorIncomingOrderActions.js';
import IncomingItem from './VendorCurrentOrderIncomingItem.jsx';

class VendorCurrentOrders extends Component {

  componentDidMount() {
    this.props.vendorIncomingOrderFetchData('/vendorIncomingOrder', 74);
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
          <h2 style={{ textAlign: 'center', color: '#fff' }}>INCOMING ORDERS</h2>
          {this.props.vendorIncomingOrder.map((item, i) =>
            <IncomingItem incomingOrder={item} key={i} />
          )}
        </Col>
        <Col style={{ textAlign: 'center', color: '#fff' }} xs={12} md={4}>
          <h2>READY FOR PICKUP</h2>

        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendorIncomingOrder: state.vendorIncomingOrder,
    vendorIncomingOrderHasErrored: state.vendorIncomingOrderHasErrored,
    vendorIncomingOrderIsLoading: state.vendorIncomingOrderIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    vendorIncomingOrderFetchData: (url) => dispatch(vendorIncomingOrderFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorCurrentOrders);
