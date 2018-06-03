/**
 * @flow
 * @providesModule XSimulatedFeed
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
 } from 'react-native';
 import {Icon} from 'react-native-elements';
import XUserLocationContainer from 'XUserLocationContainer';

type Props = {}
type State = {}

class XSimulatedFeed extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          raised
          name='chevron-left'
          type='font-awesome'
          color='black'
          onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    flex: 1,
    backgroundColor: '#8AAAB2',
  },
  Icon: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: -100,
  },
});

module.exports = XSimulatedFeed;
