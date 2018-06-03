/**
 * @flow
 * @providesModule XScreenTwo
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
 } from 'react-native';

import XStateViewContainer from 'XStateViewContainer';

type Props = {}
type State = {}

class XScreenTwo extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AAAB2',
    paddingTop: 22,
    justifyContent: 'flex-end',
  },
});

module.exports = XScreenTwo;
