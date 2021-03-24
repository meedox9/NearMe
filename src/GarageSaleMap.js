import React, { Component } from 'react'
import './css/Maps.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Sale from "./images/icons/sale.png";
import Garage from "./images/icons/garage.png";


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
          icon ={Sale}
          name="Super Garage Sale!!"
          desc="All you can buy!"
          pic={Garage}
          onClick={this.onMarkerClick}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />

        <Marker
          icon ={Sale}
          name="Garage Sale for furniture"
          desc="Lots of furniture!"
          pic={Garage}
          onClick={this.onMarkerClick}
          position={{ lat: 37.738519, lng: -122.43564 }}
        />

        <Marker
          icon ={Sale}
          name="Collectibles Garage Sale!"
          desc="Lots of sports memorabilia"
          pic={Garage}
          onClick={this.onMarkerClick}
          position={{ lat: 37.738519, lng: -122.41564 }}
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


