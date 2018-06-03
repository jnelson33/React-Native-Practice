/**
 * @flow
 * @providesModule XScreenFive
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 import {Button} from 'react-native-elements';
 import XStateViewContainer from 'XStateViewContainer';

type Props = {}
type State = {}

class XScreenFive extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Button}>
          <XStateViewContainer navigation={this.props.navigation} pickDirection='logout'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    flex: 1,
    backgroundColor: '#8AAAB2',
    justifyContent: 'flex-end',
  },
  Button: {
    justifyContent: 'center',
    paddingBottom: 2,
  },

});

module.exports = XScreenFive;
