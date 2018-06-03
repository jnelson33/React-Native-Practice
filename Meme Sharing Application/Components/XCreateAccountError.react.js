/**
 * @flow
 * @providesModule XCreateAccountError
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

class XCreateAccountError extends React.PureComponent<Props, State> {
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

module.exports = XCreateAccountError;
