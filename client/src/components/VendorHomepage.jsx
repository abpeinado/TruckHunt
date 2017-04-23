import React from 'react';
import VendorHeader from './VendorHeader.jsx';
import VendorCurrentOrders from './VendorCurrentOrders.jsx';

const VendorHomepage = () => {
  return (
    <div>
      <VendorHeader />
      <VendorCurrentOrders />
      <form action="/stripe">
        <input type="submit" value="signup with stripe" />
      </form>
    </div>
  );
};


export default VendorHomepage;
