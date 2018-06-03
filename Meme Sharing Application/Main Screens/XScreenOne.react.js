/**
 * @flow
 * @providesModule XScreenOne
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

class XScreenOne extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Icon}>
          <Icon
            raised
            name='photo'
            type='font-awesome'
            color='black'
            onPress={() => console.log('hello')} />
        </View>
        <XUserLocationContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AAAB2',
  },
  Icon: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: -100,
  },
});

module.exports = XScreenOne;
