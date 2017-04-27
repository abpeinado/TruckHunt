import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import Header from '../containers/Header.jsx';
import MainMap from '../containers/MainMap.jsx';
import TruckList from '../containers/TruckList.jsx';

const ConsumerHomepage = () => (
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

export default ConsumerHomepage;

