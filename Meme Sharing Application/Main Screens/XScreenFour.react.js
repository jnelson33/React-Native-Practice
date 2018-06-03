/**
 * @flow
 * @providesModule XScreenFour
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
 import XUserLocationContainer from 'XUserLocationContainer';
 import store from 'XConfigureStore';

  type Props = {}
  type State = {
    region: {
        latitude: number,
        longitude: number,
        latitudeDelta: number,
        longitudeDelta: number,
      },
  }

  class XScreenFour extends React.PureComponent<Props, State> {
    constructor (props:Props) {
      super(props);
      this.state = {
        region: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: 1,
          longitudeDelta: 1,
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
                latitudeDelta: .5,
                longitudeDelta: .5,
              }
            });
          },
          (error) => alert(JSON.stringify(error)),
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
        );
      }

    onRegionChange = (region) => {
      this.setState({ region });
    }

    render() {
      return (
        <View style={styles.container}>
            <XUserLocationContainer />
            <MapView style={styles.map}
              initialRegion={this.state.region}
              region={this.state.region}
              onRegionChange={this.onRegionChange}
            />
            <View style={styles.buttonContainer}>
              <Button
                backgroundColor= '#4C4C4B'
                title="Check out this location!"
                color= 'white'
                onPress={() => this.props.navigation.navigate('simulatedFeed')}
              />
            </View>
        </View>


      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AAAB2',
    justifyContent: 'flex-end',
    padding: 22,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    justifyContent: 'flex-end'
  }
});

module.exports = XScreenFour;
