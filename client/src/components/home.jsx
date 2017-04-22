// import React from 'react';
// import { Provider } from 'react-redux';
// import { render } from 'react-dom';

// const home = () => {
//   return(
//     <h2>hello</h2>
//   )
// }

// export default home;

import React, { Component } from 'react';

import { Link, Match } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>

      </div>
    );
  }
}

export default App;


      // <div>
      //   <Route exact path="/" component={LandingPage} />
      //   <Route path="/vendorManagement" component={VendorHomepage} />
      //   <Route path="/truckMenu" component={TruckInfo} />
      //   <Route path="/MainMap" component={TruckInfo} />
      //   <Route path="/login" component={Login} />
      //   <Route path="/signup" component={Signup} />
      //   <Route path="/header" component={Header} />
      //   <Route path="/vendorSignup" component={VendorSignup} />
      //   <Route path="/authenticate" component={Authenticate} />
      // </div>

// import LandingPage from './components/LandingPage.jsx';
// import VendorHomepage from './components/VendorHomepage.jsx';
// import VendorSignup from './containers/VendorSignup.jsx';
// import Signup from './containers/Signup.jsx';
// import TruckInfo from './components/TruckInfo.jsx';
// import Login from './containers/Login.jsx';
// import Authenticate from './containers/AuthModal.jsx';
// import Header from './components/Header.jsx';
// import MainMap from './components/MainMap.jsx';

