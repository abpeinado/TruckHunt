/* eslint-disable react/style-prop-object */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl, ScaleControl, Popup } from 'react-mapbox-gl';
// import { truckLocFetchData } from '../actions/truckLocActions.js';
import { truckListFetchData } from '../actions/truckListActions.js';


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerClicked: {}
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);
  }

  componentDidMount() {
    this.props.truckListFetchData('/truckList');
    console.log('got trucks');
  }


  handleMarkerClick(truck) {
    console.log('TRUCK LOCATION', truck);
    this.setState({
      markerClicked: truck
    });
  }

  handlePopupClose() {
    this.setState({
      markerClicked: {}
    });
  }

  render() {
    if (this.props.truckListHasErrored) {
      return <p>Sorry! There was an error loading today's trucks!</p>;
    }
    if (this.props.truckListIsLoading) {
      return (
        <div className="mapLoader">
          <h2>
        Finding the best trucks around...
          </h2>
          <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/loading.gif'} alt="loader" />
        </div>);
    }

    const mapStyles = {
      height: '33vh'
    };

    return (
      <Row >
        <Col xs={12} md={12} >
          <div className="mainMap" >

            <ReactMapboxGl
              style="mapbox://styles/mapbox/streets-v8"
              accessToken="pk.eyJ1Ijoic3pvbGwiLCJhIjoiY2oxanIwcHI4MDFicDMzcG1wenNmbXlqbCJ9.oRYXUrA-6QSwq2tYGLN2xw"
              containerStyle={mapStyles}
              center={[this.props.mapCenter.lng, this.props.mapCenter.lat]}

              zoom={[13]}
              pitch={50}
              light={{
                anchor: 'viewport',
                color: 'white',
                intensity: 0.4
              }}
            >
              {this.props.truckList.map((item, i) =>
                <Marker
                  coordinates={[item.location.lat, item.location.long]}
                  anchor="bottom"
                  key={i}
                  onClick={() => { this.handleMarkerClick(item); }}
                >
                  <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'} alt="mapMarker" />
                </Marker>

              )}

              { Object.keys(this.state.markerClicked).length > 0 && (
              <Popup
                coordinates={[this.state.markerClicked.location.lat, this.state.markerClicked.location.long]}
                offset={{
                  'bottom-left': [12, -38], bottom: [0, -38], 'bottom-right': [-12, -38]
                }}
                style={{ background: 'rgb(255, 106, 0)' }}
              >

                <h4>
                  {this.state.markerClicked.name} <Glyphicon onClick={this.handlePopupClose} glyph="glyphicon glyphicon-remove" />
                </h4>
                <p>Rating: {this.state.markerClicked.rating}</p>
                <p> Hours: 2-4pm </p>
              </Popup>
                )}

              <Marker
                coordinates={[this.props.mapCenter.lng, this.props.mapCenter.lat]}
                anchor="bottom"
              >
                <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/mapMarkerLocation(reduced).gif'} alt="mapCenter" />
              </Marker>

              <ZoomControl />
              <ScaleControl />
            </ReactMapboxGl>

          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckList: state.truckList,
    truckListHasErrored: state.truckListHasErrored,
    truckListIsLoading: state.truckListIsLoading,
    mapCenter: state.mapCenter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    truckListFetchData: (url) => dispatch(truckListFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

