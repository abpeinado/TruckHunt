import React from 'react';
import { Grid } from 'semantic-ui-react';
import TruckMenu from './TruckMenu.jsx';
import TrunkInfoSummary from './TruckInfoSummary.jsx';

const TruckInfoLeftPane = () => {
  return (
    <Grid.Column className="animated fadeInUp gridLeftWrapper truck-info-left-pane" width={10}>
      <TrunkInfoSummary />
      <TruckMenu />
    </Grid.Column>
  );
};


export default TruckInfoLeftPane;
