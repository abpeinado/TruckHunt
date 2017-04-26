/* eslint-disable no-unused-expressions */

import React from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import HeaderBar from './HeaderLimitedWLogin.jsx';
import CartContainer from './CartContainer.jsx';

class OrderSuccess extends React.Component {

  render() {
    return (
      <div>
        <HeaderBar />
        <Grid className="gridWrapper">
           <Grid.Column className="gridLeftWrapper truck-info-left-pane" width={10}>
              <Segment inverted color="green" className="menuHeader">
                <Header as="h1" icon textAlign="center">
                  <Header.Content>
                    <Icon.Group color="grey">
                      <Icon size='large' name='checkmark' />
                    </Icon.Group>
                    <div>
                    Order Complete!
                    </div>
                    <div>
                    Your order will be ready soon!
                    </div>
                  </Header.Content>
                </Header>
                <Header as="h2" textAlign="center">
                  <Header.Content>
                    Check your email for order status updates!
                  </Header.Content>
                </Header>
              </Segment>
            </Grid.Column>
          <CartContainer />
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     truckInfoFetchData: (truckCategory) => dispatch(truckInfoFetchData(truckCategory))
//   };
// };

export default connect(mapStateToProps, null)(OrderSuccess);
// export default TruckInfo;
