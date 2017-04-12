import React from 'react';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import TruckList from './TruckList.jsx';
import { Col } from 'react-bootstrap';
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
        <Col xs={12} md={4}>
          Map
          <MainMap />
        </Col>
      </div>
    );
  }
}

export default App;

// should contain:
//   -Header
//   -Map
//   -TruckList
