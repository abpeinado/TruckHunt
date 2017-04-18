/* eslint-disable react/style-prop-object */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl, ScaleControl, Popup } from 'react-mapbox-gl';
import { truckLocFetchData } from '../actions/truckLocActions.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerClicked: []
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);
  }

  componentDidMount() {
    this.props.truckLocFetchData('/truckLocations');
  }

  handleMarkerClick(location) {
    this.setState({
      markerClicked: location
    });
  }

  handlePopupClose() {
    this.setState({
      markerClicked: []
    });
  }

  render() {
    // console.log('LOCATION', this.props.mapCenter.lat, this.props.mapCenter.lng);
    if (this.props.truckLocHasErrored) {
      return <p>Sorry! There was an error loading today's trucks!</p>;
    }
    if (this.props.truckLocIsLoading) {
      return <p>Map Loading…</p>;
    }

    const mapStyles = {
      height: '33vh'
    };

    const popup = (
      <Popup
        coordinates={this.state.markerClicked}
        offset={{
          'bottom-left': [12, -38], bottom: [0, -38], 'bottom-right': [-12, -38]
        }}
      >
        <div>
        <Button onClick={this.handlePopupClose}>
          <Glyphicon glyph="glyphicon glyphicon-remove" />
        </Button>
        </div>
        <h1>Popup</h1>
      </Popup>
      );

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
              {this.props.truckLoc.map((item, i) =>
                <Marker
                  coordinates={[item.lat, item.long]}
                  anchor="bottom"
                  key={i}
                  onClick={() => {this.handleMarkerClick([item.lat, item.long])}}
                >
                  <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'} alt="mapMarker" />
                </Marker>

              )}

              { this.state.markerClicked.length === 2 && popup }

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
    truckLoc: state.truckLoc,
    truckLocHasErrored: state.truckLocHasErrored,
    truckLocIsLoading: state.truckLocIsLoading,
    mapCenter: state.mapCenter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    truckLocFetchData: (url) => dispatch(truckLocFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

