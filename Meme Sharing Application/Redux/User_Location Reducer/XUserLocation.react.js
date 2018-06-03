/**
 * @flow
 * @providesModule XUserLocation
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Navigator
 } from 'react-native';
 import MapView from 'react-native-maps';
 import {Button} from 'react-native-elements';

  type Props = {
    setLocation: (latitude: number, longitude: number) => void,
  }
  type State = {
    region: {
        latitude: number,
        longitude: number,
      },
  }

  class XUserLocation extends React.PureComponent<Props, State> {
    constructor (props:Props) {
      super(props);
      this.state = {
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      };
    }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        });
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000});
  }

  render() {
    return (
      <View>
        {this.props.setLocation(this.state.region.latitude, this.state.region.longitude)}
      </View>
    )
  }
}

module.exports = XUserLocation;
