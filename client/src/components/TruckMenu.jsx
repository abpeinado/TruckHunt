import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import TruckMenuGroup from './TruckMenuGroup.jsx';

export const TruckMenuComponent = (props) => {
  const TabPane = Tabs.TabPane;
  return (
    <Grid.Row className="TruckMenuClass">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Menu" key="1">
          {props.truckInfo.map((menuGroup, i) =>
            <TruckMenuGroup
              menuGroup={menuGroup}
              key={i}
            />
          )}
        </TabPane>
        <TabPane tab="About" key="2">About Page</TabPane>
        <TabPane tab="Map" key="3">Map Page </TabPane>
      </Tabs>
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
