import React from 'react';
import { connect } from 'react-redux';
import VendorHeader from '../components/VendorHeader.jsx';
import VendorCurrentOrders from './VendorCurrentOrders.jsx';

const VendorHomepage = () => {
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
