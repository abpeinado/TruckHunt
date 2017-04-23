import React from 'react';
import { Route } from 'react-router';
import ConsumerHomepage from './ConsumerHomepage.jsx';
import Login from '../containers/AuthModal.jsx';
import TruckInfo from './TruckInfo.jsx';
import Vendor from './VendorHomepage.jsx';

// import OwnerSignup from './OwnerSignup.jsx';
// import TruckInfo from './TruckInfo.jsx';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ConsumerHomepage} />
        <Route path="/auth" component={Login} />
        <Route path="/truckMenu" component={TruckInfo} />
        <Route path="/vendor" component={Vendor} />

        {/* ADD ADDITIONAL ROUTES HERE */}
        {/* TODO: INTEGRATE PATHNAME ARGUMENT IN ROUTES*/}
      </div>
    );
  }
}

export default LandingPage;
