/**
 * @flow
 * @providesModule AddCity
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

class AddCity extends React.Component<Props, State> {
  render() {
    return (
      <View>
          <Text> Welcome from AddCity! </Text>
      </View>
    )
  }
}

module.exports = AddCity;
