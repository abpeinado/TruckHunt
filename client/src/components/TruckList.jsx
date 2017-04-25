/* eslint-disable no-unused-expressions */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Card } from 'semantic-ui-react';
import { truckListFetchData } from '../actions/truckListActions.js';
import { truckSelectedUpdate } from '../actions/truckSelectedActions.js';
import { truckInfoFetchData } from '../actions/truckInfoActions.js';
import { mapMarkerUpdate } from '../actions/mapActions.js';
import TruckListItem from './TruckListItem.jsx';

// import $ from 'jquery';


class TruckList extends Component {

  componentWillReceiveProps() {
    // this.props.truckListFetchData('/truckList');
    this.props.truckList;
    // console.log('got trucks for list');
  }

  render() {
    // PER THE ORIGINAL MASONRY DOCS -> doesn't play nice with react
    // document.getElementByClassName('grid').masonry({
    //   // set itemSelector so .grid-sizer is not used in layout
    //   itemSelector: '.grid-item',
    //   // use element for option
    //   columnWidth: '.grid-sizer',
    //   percentPosition: true
    // });

    return (
      <Grid className="truckListCards">
        <Grid.Column className="grid-sizer">
          <Card.Group itemsPerRow={2}>
            {this.props.truckList === undefined ? null :
            (this.props.truckList.map((item, i) =>
              <Link to="/truckMenu" key={i} onMouseOver={() => { this.props.mapMarkerUpdate(item); }} onClick={() => { this.props.truckSelectedUpdate(item); this.props.truckInfoFetchData(item.food_category); }}>
                <TruckListItem className="grid-item" restaurant={item} />
              </Link>
            ))
          }
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckList: state.truckList,
    truckSelected: state.truckSelected,
    mapMarkerSelected: state.mapMarkerSelected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapMarkerUpdate: (mapMarker) => dispatch(mapMarkerUpdate(mapMarker)),
    truckSelectedUpdate: (truck) => dispatch(truckSelectedUpdate(truck)),
    truckListFetchData: (url) => dispatch(truckListFetchData(url)),
    truckInfoFetchData: (truckCategory) => dispatch(truckInfoFetchData(truckCategory))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);
