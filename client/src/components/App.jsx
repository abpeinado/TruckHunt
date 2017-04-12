import React from 'react';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import TruckList from './TruckList.jsx';
import Signup from './OwnerSignup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsLogin: false
    };
  }

  render() {
    if (this.state.wantsLogin) {
      return (
        <Signup />
      );
    }
    return (
      <div>
        <Header />
        <TruckList />
        <MainMap />
      </div>
    );
  }
}

export default App;
