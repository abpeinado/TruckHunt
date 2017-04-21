import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
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
    console.log('this is the landing page', this);
    return (
      <div>

        <Route exact path="/" component={Header} />
        <Route exact path="/" component={MainMap} />
        <Route exact path="/" component={TruckList} />
        <Route path="/auth" component={Header} />
        <Route path="/auth" component={Login} />
        <Route path="/truckMenu" component={Header} />
        <Route path="/truckMenu" component={TruckInfo} />
        <Route path="/vendor" component={Vendor} />

        {/* ADD ADDITIONAL ROUTES HERE */}
        {/* TODO: INTEGRATE PATHNAME ARGUMENT IN ROUTES*/}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userWantsLandingPage: state.userWantsLandingPage,
    userWantsLogin: state.userWantsLogin,
    userWantsCheckout: state.userWantCheckout,
    userWantsAdmin: state.userWantsAdmin
  };
};

/* In react-router v4.1.1 withRouter will re-render its component every time the route changes, necessary in redux */
export default withRouter(connect(mapStateToProps, null)(LandingPage));
