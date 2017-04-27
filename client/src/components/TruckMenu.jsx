import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TruckMenuGroup from './TruckMenuGroup.jsx';

export const TruckMenuComponent = (props) => {
  return (
    <Row className="TruckMenuClass">
      {props.truckInfo.map((menuGroup, i) =>
        <TruckMenuGroup
          menuGroup={menuGroup}
          key={i}
        />
      )}
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
