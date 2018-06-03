/**
 * @flow
 * @providesModule ScreenTwoView
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
 } from 'react-native';

import XCounterViewContainer from 'XCounterViewContainer';
import XIdEditorViewContainer from 'XIdEditorViewContainer';
import XActiveViewContainer from 'XActiveViewContainer';
import XStateViewContainer from 'XStateViewContainer';

type Props = {}
type State = {}

class ScreenTwoView extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
          <XIdEditorViewContainer />
          <XActiveViewContainer />
          <XCounterViewContainer />
          <XStateViewContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e6ef',
    paddingTop: 22,
    justifyContent: 'flex-end',
  },
});

module.exports = ScreenTwoView;
