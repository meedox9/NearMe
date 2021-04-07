import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Brick from "./images/icons/brick.png";
import Castle from "./images/icons/castle.png";
import HockeyIcon from "./images/icons/threeBed.png";
import Tower from "./images/icons/tower.png";
import Three from "./images/icons/Three.png";
import cas from "./images/icons/cas.png";
import brickHome from "./images/icons/brickHome.png";
import './css/Maps.css';

class Maps extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={14}>

        <Marker
          icon ={HockeyIcon}
          name="Duplex Home"
          desc="4 Bedroom, 4 Bath Dubplex for sale"
          pic={Three}
          onClick={this.onMarkerClick}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />

        <Marker
          icon ={Brick}
          name="2 Floor House"
          desc="Open house for a beatuiful family home"
          pic={brickHome}
          onClick={this.onMarkerClick}
          position={{ lat: 37.738519, lng: -122.43564 }}
        />

        <Marker
          icon ={Tower}
          name="Twin Tower Appartments"
          desc="Modern apartment open house"
          pic={brickHome}
          onClick={this.onMarkerClick}
          position={{ lat: 37.738519, lng: -122.41564 }}
        />

        <Marker
          icon ={Castle}
          name="Castle Home"
          desc="Antique castle home for viewing"
          pic={cas}
          onClick={this.onMarkerClick}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
            <h3>{this.state.selectedPlace.desc}</h3>
            <img src={this.state.selectedPlace.pic} width="200" height="100" />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
apiKey: "AIzaSyDtlcbH_klvsg3ffoVE_6H2tylL4UxtatI"
})(Maps);


