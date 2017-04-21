import React from 'react';
import { Route } from 'react-router';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import Login from '../containers/AuthModal.jsx';
import TruckList from './TruckList.jsx';
import TruckInfo from './TruckInfo.jsx';
import Vendor from './VendorHomepage.jsx';

// import OwnerSignup from './OwnerSignup.jsx';
// import TruckInfo from './TruckInfo.jsx';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={MainMap} />
        <Route exact path="/" component={TruckList} />
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
