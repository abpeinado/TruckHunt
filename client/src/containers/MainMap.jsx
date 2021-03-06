/* eslint-disable react/style-prop-object  */
/* eslint-disable no-unused-vars */

import React from 'react';
import { connect } from 'react-redux';
import { Icon, Rating, Label } from 'semantic-ui-react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line no-unused-vars
import ReactMapboxGl, { Marker, ZoomControl, ScaleControl, Popup } from 'react-mapbox-gl';
import { mapMarkerUpdate, mapCenterUpdate } from '../actions/mapActions.js';
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
    this.props.truckListFetchData('/search', this.props.mapCenter, this.props.mapDate);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  }

  showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const newCoordinates = { lng, lat };
    this.props.mapCenterUpdate(newCoordinates);
  }

  render() {
    if (this.props.truckListHasErrored) {
      return <p>Sorry! There was an error loading today's trucks!</p>;
    }

    const mapStyles = {
      height: '92vh'
    };

    let start = '';
    let end = '';
    if (Object.keys(this.props.mapMarkerSelected).length > 0) {
      start = this.props.mapMarkerSelected.start_time;
      end = this.props.mapMarkerSelected.end_time;
      if (start < 12) {
        start += ' AM';
      } else if (start === 12) {
        start += ' PM';
      } else {
        start -= 12;
        start += ' PM';
      }

      if (end < 12) {
        end += ' AM';
      } else if (end === 12) {
        end += ' PM';
      } else {
        end -= 12;
        end += ' PM';
      }
    }

    return (
      <div className="mainMap" >
        <ReactMapboxGl
          style="mapbox://styles/mapbox/streets-v8"
          accessToken="pk.eyJ1Ijoic3pvbGwiLCJhIjoiY2oxanIwcHI4MDFicDMzcG1wenNmbXlqbCJ9.oRYXUrA-6QSwq2tYGLN2xw"
          containerStyle={mapStyles}
          center={[this.props.mapCenter.lng, this.props.mapCenter.lat]}
          zoom={[13.5]}
          pitch={50}
          light={{
            anchor: 'viewport',
            color: 'white',
            intensity: 0.4
          }}
        >
          { (this.props.truckList.length) ? (
              this.props.truckList.map((item, i) => {
                const random = (Math.floor(Math.random() * 4) + 1);
                const image = 'https://s3-us-west-1.amazonaws.com/zollstorage/truckhunt/TruckHuntMarker.png';
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
              )
            ) : (null)
          }


          { Object.keys(this.props.mapMarkerSelected).length > 0 && (
          <Popup
            coordinates={[this.props.mapMarkerSelected.coordinates.long, this.props.mapMarkerSelected.coordinates.lat]}
            anchor="top-left"
          >

            <h4>
              {this.props.mapMarkerSelected.vendor_name} <Icon link color="orange" name="close" onClick={() => { this.props.mapMarkerUpdate({}); }} />
            </h4>
            <Label color="orange" >Open {start} to {end}</Label>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    truckList: state.truckList,
    truckListHasErrored: state.truckListHasErrored,
    truckListIsLoading: state.truckListIsLoading,
    mapCenter: state.mapCenter,
    mapDate: state.mapDate,
    mapMarkerSelected: state.mapMarkerSelected

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    truckListFetchData: (url, location, locationDate) => dispatch(truckListFetchData(url, location, locationDate)),
    mapMarkerUpdate: (mapMarker) => dispatch(mapMarkerUpdate(mapMarker)),
    mapCenterUpdate: (coordinates) => dispatch(mapCenterUpdate(coordinates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
