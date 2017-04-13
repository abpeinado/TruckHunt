import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
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
      wantsTruckInfo: false
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
      <Grid>
        <Row>
          <Header />
        </Row>
        <Row >
          <Col md={9}>
            <TruckList />
          </Col>
          <Col md={3}>
            <MainMap />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
