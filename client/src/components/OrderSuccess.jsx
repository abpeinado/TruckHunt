/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */

import React from 'react';
import { Grid, Segment, Header, Icon, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import HeaderBar from './HeaderLimitedWLogin.jsx';

class OrderSuccess extends React.Component {

  render() {
    let endtime = this.props.truckSelected.end_time;
    let formattedTime = '';

    if (endtime > 12) {
      formattedTime = ((endtime - 12) + ' PM');
    } else if (endtime === 12) {
      formattedTime = endtime + ' PM';
    } else {
      formattedTime = endtime + ' AM';
    }

    return (
      <div>
        <HeaderBar />
        <Grid className="gridWrapper" textAlign="center">
          <Grid.Column className="gridLeftWrapper truck-info-left-pane" width={12}>
            <Segment inverted color="green" className="animated fadeIn menuHeader" style={{ minHeight: '12em' }}>
              <Header as="h1" icon textAlign="center">
                <Header.Content style={{ paddingTop: '1.2em' }} className="animated tada" >
                  <Icon.Group color="grey" >
                    <Icon size="large" name="checkmark" />
                  </Icon.Group>
                  <div style={{ paddingBottom: '2em' }}>
                  Order Complete!
                  </div>
                </Header.Content>
              </Header>
              <Header as="h2" textAlign="center" >
                <Header.Content style={{ paddingBottom: '1.2em' }}>
                  <div>
                  Your order from <Label color="yellow" size="huge" horizontal>{this.props.truckSelected.vendor_name}</Label> will be ready soon!
                  </div>

                  Don't forget to pickup your order by <Label color="yellow" horizontal>{formattedTime}</Label>!
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
