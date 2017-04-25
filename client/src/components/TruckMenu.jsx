import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TruckMenuGroup from './TruckMenuGroup.jsx';

export const TruckMenuComponent = (props) => {
  return (
    <Grid.Row className="TruckMenuClass">
<<<<<<< HEAD
      {props.truckInfo.map((menuGroup, i) =>
        <TruckMenuGroup
          menuGroup={menuGroup}
          key={i}
        />
      )}
=======
      <Tabs defaultActiveKey="1">
        <TabPane tab="Menu" key="1">
          {props.truckInfo.map((menuGroup, i) =>
            <TruckMenuGroup
              menuGroup={menuGroup}
              key={i}
            />
          )}
        </TabPane>
        <TabPane tab="About" key="2">About Page Coming Soon!</TabPane>
        <TabPane tab="Map" key="3">Map Page Coming Soon!</TabPane>
      </Tabs>
>>>>>>> (feat) vendor data ready for client
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
