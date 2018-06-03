/**
 * @flow
 * @providesModule Cities
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

class Cities extends React.Component<Props, State> {
  render() {
    return (
      <View>
          <Text> Welcome to Cities! </Text>
      </View>
    )
  }
}

module.exports = Cities;
