/* eslint-disable react/style-prop-object */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl, ScaleControl, Popup } from 'react-mapbox-gl';
import { mapMarkerUpdate, mapMarkerUnselected, mapCenterUpdate } from '../actions/mapActions.js';
import { truckListFetchData } from '../actions/truckListActions.js';


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: null,
        long: null
      }
    };
    this.showPosition = this.showPosition.bind(this);
  }

  componentDidMount() {
    this.getLocation();
    // TODO: ADD DATE PARAM TO REQUEST
    this.props.truckListFetchData('/search', this.props.mapCenter);
    // console.log('trucks list recieved');
  }

  getLocation() {
    if (navigator.geolocation) {
      const location = navigator.geolocation.getCurrentPosition(this.showPosition);
      // console.log('current location test', location);
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  }

  showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log('current location lat', lat);
    // console.log('current location long', lng);
    const newCoordinates = { lng, lat };
    // console.log('showPos props', newCoordinates);
    this.props.mapCenterUpdate(newCoordinates);
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
              {this.props.truckList.map((item, i) => {
                const random = (Math.floor(Math.random() * 4) + 1);
                const image = `https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV${random}.png`;
                return (
                  <Marker
                    coordinates={[Number(item.coordinates.long), Number(item.coordinates.lat)]}
                    anchor="bottom"
                    key={i}
                    onClick={() => { this.props.mapMarkerUpdate(item); }}
                  >
                    <img src={image} alt={`mapMarker${image}`} />
                  </Marker>
                );
              }

              )}

              { Object.keys(this.props.mapMarkerSelected).length > 0 && (
              <Popup
                coordinates={[this.props.mapMarkerSelected.coordinates.long, this.props.mapMarkerSelected.coordinates.lat]}
                anchor="top-left"
                // offset={{
                //   'bottom-left': [12, -38], bottom: [0, -38], 'bottom-right': [-12, -38]
                // }}
              >

                <h4>
                  {this.props.mapMarkerSelected.vendor_name} <Glyphicon onClick={() => { this.props.mapMarkerUpdate({}); }} glyph="glyphicon glyphicon-remove" />
                </h4>
                <p>Rating: 4/5</p>
                <p> Hours: {this.props.mapMarkerSelected.start_time} to {this.props.mapMarkerSelected.end_time}</p>
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
    mapCenter: state.mapCenter,
    mapMarkerSelected: state.mapMarkerSelected

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    truckListFetchData: (url) => dispatch(truckListFetchData(url)),
    mapMarkerUpdate: (mapMarker) => dispatch(mapMarkerUpdate(mapMarker)),
    mapCenterUpdate: (coordinates) => dispatch(mapCenterUpdate(coordinates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
