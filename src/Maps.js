import React, { Component } from 'react'
import './css/Maps.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import SoccerIcon from "./images/icons/soccer.png";
import BasketballIcon from "./images/icons/Basketball.png";
import HockeyIcon from "./images/icons/Hockey.png";
import VolleyballIcon from "./images/icons/Volleyball.png";
import FootballIcon from "./images/icons/Football.png";
import Court from "./images/icons/court.jpg";



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
          name="Basktball Game"
          onClick={this.onMarkerClick}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />

        <Marker
          icon ={FootballIcon}
          name="SOMA"
          onClick={this.onMarkerClick}
          position={{ lat: 37.738519, lng: -122.45564 }}
        />

        <Marker
          icon ={BasketballIcon}
          name="Basktball Game"
          onClick={this.onMarkerClick}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
            <h2>4 players required</h2>
            <img src={Court} width="200" height="100" />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
apiKey: "AIzaSyDtlcbH_klvsg3ffoVE_6H2tylL4UxtatI"
})(Maps);


