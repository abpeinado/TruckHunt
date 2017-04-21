import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TruckMenuGroup from './TruckMenuGroup.jsx';

export const TruckMenuComponent = (props) => {
  return (
    <Row>
      <Col md={12} className="TruckMenuClass">
        {props.truckInfo.map((menuGroup, i) =>
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
    truckInfo: state.truckInfo
  };
};

const TruckMenu = connect(mapStateToProps)(TruckMenuComponent);

export default TruckMenu;
