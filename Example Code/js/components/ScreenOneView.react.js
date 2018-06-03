/**
 * @flow
 * @providesModule ScreenOneView
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
 } from 'react-native';

type Props = {}
type State = {}

class ScreenOneView extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
          <Text> ScreenOneView </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e6ef',
    paddingTop: 22,
  },
});

module.exports = ScreenOneView;
