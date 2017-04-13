import React from 'react';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import TruckList from './TruckList.jsx';
import OwnerSignup from './OwnerSignup.jsx';
import TruckInfo from './TruckInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsOwnerSignup: false,
      wantsTruckInfo: true
    };
  }

  render() {
    if (this.state.wantsOwnerSignup) {
      return (
        <OwnerSignup />
      );
    }
    if (this.state.wantsTruckInfo) {
      return (
        <TruckInfo />
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
