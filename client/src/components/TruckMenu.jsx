import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TruckMenuGroup from './TruckMenuGroup.jsx';

export const TruckMenuComponent = ({ menu }) => (
  <Row>
    <Col md={12}>
      {menu.map((menuGroup, i) =>
        <TruckMenuGroup
          menuGroup={menuGroup}
          key={i}
        />
      )}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    menu: state.truckInfo.menu
  };
};

const TruckMenu = connect(mapStateToProps)(TruckMenuComponent);

export default TruckMenu;
