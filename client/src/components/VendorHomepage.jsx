import React from 'react';
import { connect } from 'react-redux';
import VendorHeader from './VendorHeader.jsx';
import VendorCurrentOrders from './VendorCurrentOrders.jsx';

const VendorHomepage = (props) => {
  // console.log('this is from the vendor homepage YEEHAW FUCKA!', this.props.setUserID);
  return (
    <div>
      <VendorHeader />
      <VendorCurrentOrders />

      <form action={`/stripe?user=${props.setUserID}`} method="post">
        <input type="submit" value="signup with stripe" />
      </form>
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
