import React from 'react';
// import { connect } from 'react-redux';
import { Grid, Col } from 'react-bootstrap';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import TruckList from './TruckList.jsx';


class ConsumerHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div >
        <Header />
        <Grid fluid>
          <Col lg={8} mdHidden={12} smHidden={12} xsHidden={12}>
            <MainMap />
          </Col>
          <Col lg={4} sm={12} >
            <TruckList />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default ConsumerHomepage;

