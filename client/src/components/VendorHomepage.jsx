import React from 'react';
import VendorHeader from './VendorHeader.jsx';
import VendorCurrentOrders from './VendorCurrentOrders.jsx';
import { Link } from 'react-router-dom';

const VendorHomepage = () => (
  <div>
    <VendorHeader />
    <VendorCurrentOrders />


    <button>hello</button>
  </div>
);

export default VendorHomepage;
