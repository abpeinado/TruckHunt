/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Image, Row } from 'react-bootstrap';
import { vendorIncomingOrderFetchData } from '../actions/vendorIncomingOrderActions.js';
import VendorHeader from '../components/VendorHeader.jsx';
import PastOrder from '../components/VendorPastOrdersItem.jsx';

class VendorPastOrders extends Component {

  componentDidMount() {
    this.props.FetchVendorOrders('/vendorIncomingOrders', this.props.setUserID);
  }

  render() {
    if (this.props.vendorIncomingOrderHasErrored) {
      return (
        <div>
          <Header />
          <Grid fluid >
            <Row style={{textAlign:"center", paddingTop: "2em"}}>
              <Image src='https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/Truck_Loading.gif'/>
              <h2 style={{ textAlign:"center" }}>
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
            <Row style={{textAlign:"center", paddingTop: "2em"}}>
              <Image src='https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/Truck_Loading.gif'/>
              <h2 style={{ textAlign:"center" }}>
                Loading Orders...
              </h2>
            </Row>
          </Grid>
        </div>
      );
    }
    return (
      <div>
        <VendorHeader />
        <Col xs={12} >
          <h2 style={{ textAlign: 'center' }}>COMPLETED ORDERS</h2>
          {this.props.vendorIncomingOrder.map((item, i) => {
            if (item.order_status === 3) {
              return <PastOrder incomingOrder={item} key={i} />;
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
    setUserID: state.setUserID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchVendorOrders: (url, id) => dispatch(vendorIncomingOrderFetchData(url, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorPastOrders);
