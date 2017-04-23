import React from 'react';
// import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import TruckList from './TruckList.jsx';


class ConsumerHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillUpdate() {
  //   this.props.truckListIsLoading;
  // }


  render() {
    // if (this.props.truckListIsLoading) {
    //   return (
    //     <div className="mapLoader">
    //       <h2>
    //     Finding the best trucks around...
    //       </h2>
    //       <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/loading.gif'} alt="loader" />
    //     </div>);
    // }

    return (
      <div className="mainroot">
        <Header className="headerWrapper" />
        <Grid className="gridWrapper">
          <Grid.Column className="gridLeftWrapper" width={10}>
            <MainMap className="mapWrapper" />
          </Grid.Column>
          <Grid.Column width={6} className="gridRightWrapper">
            <TruckList className="truckListWrapper" />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     truckListIsLoading: state.truckListIsLoading
//   };
// };

// export default connect(mapStateToProps)(ConsumerHomepage);
export default ConsumerHomepage;

