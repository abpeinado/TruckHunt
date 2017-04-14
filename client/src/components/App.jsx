import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
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
        <div>
          <Header />
          <Signup />
        </div>
      );
    }
    return (
      <Grid fluid>
        <div className='headerWrapper'>
          <Row fluid>
            <Header />
          </Row>
        </div>
        <div className='bodyWrapper'>
          <Row fluid>
            <Col md={8}>
              <TruckList />
            </Col>
            <Col md={4}>
              <MainMap />
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

export default App;
