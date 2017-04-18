/* eslint-disable react/style-prop-object */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl, ScaleControl } from 'react-mapbox-gl';
import { truckLocFetchData } from '../actions/truckLocActions.js';

class Map extends React.Component {

  componentDidMount() {
    this.props.truckLocFetchData('/truckLocations');
  }

  render() {
    if (this.props.truckLocHasErrored) {
      return <p>Sorry! There was an error loading today's trucks!</p>;
    }
    if (this.props.truckLocIsLoading) {
      return <p>Map Loading…</p>;
    }

    return (
      <Row >
        <Col xs={12} md={12} >
          <div className="mainMap" >

            <ReactMapboxGl
              style="mapbox://styles/mapbox/streets-v8"
              accessToken="pk.eyJ1Ijoic3pvbGwiLCJhIjoiY2oxanIwcHI4MDFicDMzcG1wenNmbXlqbCJ9.oRYXUrA-6QSwq2tYGLN2xw"
              containerStyle={{
                height: '33vh' }}
              center={[-122.408966, 37.783697]}
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
                >
                  <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'} alt="mapMarker" />
                </Marker>
              )}
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
    truckLocIsLoading: state.truckLocIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    truckLocFetchData: (url) => dispatch(truckLocFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
