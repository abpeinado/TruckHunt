import React from 'react';
import { connect } from 'react-redux';
import VendorHeader from './VendorHeader.jsx';
import VendorCurrentOrders from './VendorCurrentOrders.jsx';

const VendorHomepage = () => {
  // console.log('this is from the vendor homepage YEEHAW FUCKA!', this.props.setUserID);
  return (
    <div>
      <VendorHeader />
      <VendorCurrentOrders />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    setUserID: state.setUserID,
    setUsername: state.setUsername
  };
};

export default connect(mapStateToProps, null)(VendorHomepage);
