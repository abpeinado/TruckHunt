import React from 'react';
import { Grid } from 'semantic-ui-react';
import TruckMenu from './TruckMenu.jsx';

const TruckInfoLeftPane = () => {
  return (
    <Grid.Column className="gridLeftWrapper truck-info-left-pane" width={10}>
      <TruckMenu />
    </Grid.Column>
  );
};


export default TruckInfoLeftPane;
