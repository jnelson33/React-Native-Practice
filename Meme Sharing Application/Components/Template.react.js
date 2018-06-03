/**
 * @flow
 * @providesModule Template
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

type Props = {}
type State = {}

class Template extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
          <Text> DeckList is compatible! </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = Template;
