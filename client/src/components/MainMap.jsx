import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default function Map() {
  return (
    <Row >
      <Col xs={12} md={8} >
        <div className="mainMap" >
          <ReactMapboxGl
            style="mapbox://styles/mapbox/streets-v8"
            accessToken="pk.eyJ1Ijoic3pvbGwiLCJhIjoiY2oxanIwcHI4MDFicDMzcG1wenNmbXlqbCJ9.oRYXUrA-6QSwq2tYGLN2xw"
            containerStyle={{
              height: "30vh",
              width: "100vw"
            }}
            center={[-122.408966, 37.783697]}
            zoom={[13]}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[37.784118, -122.406435]}/>
              </Layer>
          </ReactMapboxGl>
        </div>
      </Col>
    </Row>
  );
}
