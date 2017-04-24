import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TruckMenuGroup from './TruckMenuGroup.jsx';

export const TruckMenuComponent = (props) => {
  return (
      <Grid.Row className="TruckMenuClass">
        {props.truckInfo.map((menuGroup, i) =>
          <TruckMenuGroup
            menuGroup={menuGroup}
            key={i}
          />
        )}
      </Grid.Row>
  );
};

const mapStateToProps = (state) => {
  return {
    truckInfo: state.truckInfo
  };
};

const TruckMenu = connect(mapStateToProps)(TruckMenuComponent);

export default TruckMenu;
