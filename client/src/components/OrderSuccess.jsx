/* eslint-disable no-unused-expressions */

import React from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import HeaderBar from './HeaderLimitedWLogin.jsx';

class OrderSuccess extends React.Component {

  render() {
    return (
      <div>
        <HeaderBar />
        <Grid className="gridWrapper" textAlign="center">
          <Grid.Column className="animated tada gridLeftWrapper truck-info-left-pane" width={12}>
            <Segment inverted color="green" className="menuHeader" style={{ 'min-height': '12em' }}>
              <Header as="h1" icon textAlign="center">
                <Header.Content style={{ 'padding-top': '1.2em' }}>
                  <Icon.Group color="grey">
                    <Icon size="large" name="checkmark" />
                  </Icon.Group>
                  <div>
                  Order Complete!
                  </div>
                  <div>
                  Your order will be ready soon!
                  </div>
                </Header.Content>
              </Header>
              <Header as="h2" textAlign="center" >
                <Header.Content style={{ 'padding-bottom': '1.2em' }}>
                  Check your email for order status updates!
                </Header.Content>
              </Header>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckInfo: state.truckInfo,
    truckInfoHasErrored: state.truckInfoHasErrored,
    truckInfoIsLoading: state.truckInfoIsLoading,
    truckSelected: state.truckSelected
  };
};

export default connect(mapStateToProps, null)(OrderSuccess);
