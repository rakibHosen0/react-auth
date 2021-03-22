import React from "react";
import "./AvailableRide.css";
import Header from "../Header/Header";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { Container, Button } from "react-bootstrap";

const AvailableRide = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    ))
  );
  return (
    <div>
      <Header />
      <Container className="show-map mt-3">
        <div className="search-field">
          <h5>Pick From</h5>
          <input type="text"></input>

          <h5>Pick To</h5>
          <input type="text"></input>
          <br />
          <Button className="btn" variant="primary">
            Search
          </Button>
        </div>
        <div className="map">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWF1jdz7yis91zI1wFBtOH95bLqlVgt-g&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </Container>
    </div>
  );
};

export default AvailableRide;
