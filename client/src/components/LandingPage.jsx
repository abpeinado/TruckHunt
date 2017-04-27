import React from 'react';
import { Route } from 'react-router';
import ConsumerHomepage from './ConsumerHomepage.jsx';
import Login from '../containers/AuthModal.jsx';
import TruckInfo from './TruckInfo.jsx';
import TruckDetail from './TruckDetail.jsx';
import OrderSuccess from './OrderSuccess.jsx';
import Vendor from './VendorHomepage.jsx';
import VendorAnalytics from './VendorAnalytics.jsx';
import PastOrders from './VendorPastOrders.jsx';
import MenuSelection from './VendorMenuSelection.jsx';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ConsumerHomepage} />
        <Route path="/auth" component={Login} />
        <Route path="/truckMenu" component={TruckInfo} />
        <Route path="/truckDetail" component={TruckDetail} />
        <Route path="/vendor" component={Vendor} />
        <Route path="/analytics" component={VendorAnalytics} />
        <Route path="/pastOrders" component={PastOrders} />
        <Route path="/menuSelection" component={MenuSelection} />
        <Route path="/orderSuccess" component={OrderSuccess} />
      </div>
    );
  }
}

export default LandingPage;
