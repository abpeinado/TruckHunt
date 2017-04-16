import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { truckLocFetchData } from '../actions/truckLocActions.js';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl, ScaleControl } from "react-mapbox-gl";
import mapboxgl from 'mapbox-gl';

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
                height: "33vh"}}
              center={[-122.408966, 37.783697]}
              zoom={[13]}
              pitch={50}
              light= {{
                anchor: "viewport",
                color: "white",
                intensity: 0.4
              }}

              >
              {this.props.truckLoc.map((item, i) =>
                <Marker
                  coordinates={[item.lat, item.long]}
                  anchor="bottom">
                  <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'}/>
                </Marker>
              )}
              <ZoomControl/>
              <ScaleControl/>
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





                // <Marker
                //   coordinates={[-122.203071, 37.7505]}
                //   anchor="bottom">
                //   <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'}/>
                // </Marker>
                // <Marker
                //   coordinates={[-122.397652, 37.788353]}
                //   anchor="bottom">
                //   <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'}/>
                // </Marker>
                // <Marker
                //   coordinates={[-122.426491, 37.767119]}
                //   anchor="bottom">
                //   <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'}/>
                // </Marker>
                // <Marker
                //   coordinates={[-122.410011, 37.802189]}
                //   anchor="bottom">
                //   <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'}/>
                // </Marker>
                // <Marker
                //   coordinates={[-122.447777, 37.781298]}
                //   anchor="bottom">
                //   <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/MapMarkerV1.png'}/>
                // </Marker>



                // <Layer
                //   type="symbol"
                //   id="marker"
                //   layout={{ "icon-image": "marker-15" }}>
                //   <Feature coordinates={[37.784118, -122.406435]}/>
                // </Layer>



            // const mapStyle = ({
            //   width: '100vh',
            //   height: '30vh'
            // });
            // const mapOptions = ({
            //   style: 'mapbox://styles/mapbox/streets-v9',
            //   center: [-122.408966, 37.783697],
            //   zoom: [13]
            // });

            // const childProps1 = ({
            //   lnglat: [-122.203071, 37.7505],
            //   width: 50,
            //   height: 50,
            //   neighborDistance: 5
            // });

            // <Mapbox
            //   mapboxgl={mapboxgl}
            //   accessToken="pk.eyJ1Ijoic3pvbGwiLCJhIjoiY2oxanIwcHI4MDFicDMzcG1wenNmbXlqbCJ9.oRYXUrA-6QSwq2tYGLN2xw"
            //   style={mapStyle}
            //   options={mapOptions}
            // >
            //   <div overlay={childProps1}>
            //     <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/thesis/LogoV1.png'} />
            //   </div>
            // </Mapbox>