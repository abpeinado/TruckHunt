import React from 'react';
// import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Header from './Header.jsx';
import MainMap from './MainMap.jsx';
import TruckList from './TruckList.jsx';


class ConsumerHomepage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    // if (this.props.truckListIsLoading) {
    //   return (
    //     <div>
    //       <Header />
    //       <div className="mapLoader">
    //         <h2>
    //       Finding the best trucks around...
    //         </h2>
    //         <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/loading.gif'} alt="loader" />
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <div>
        <Header />
        <Grid>
          <Grid.Column width={10}>
            <MainMap />
          </Grid.Column>
          <Grid.Column width={6}>
            <TruckList />
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

