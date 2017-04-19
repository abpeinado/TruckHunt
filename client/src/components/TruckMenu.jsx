import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TruckMenuGroup from './TruckMenuGroup.jsx';

export const TruckMenuComponent = (props) => {
  return (
    <Row>
      <Col md={12}>
        {props.truckSelected.map((menuGroup, i) =>
          <TruckMenuGroup
            menuGroup={menuGroup}
            key={i}
          />
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    truckSelected: state.truckSelected.menu
  };
};

const TruckMenu = connect(mapStateToProps)(TruckMenuComponent);

export default TruckMenu;
