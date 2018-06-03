/**
 * @flow
 * @providesModule XActiveView
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
 } from 'react-native';

type Props = {
  active: number,
  onClick: () => void,
  addActive: () => void,
}
type State = {}

class XActiveView extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
          <Text> Active State: {this.props.active}</Text>
          <Button
            title="Make Active!"
            onPress={() => {
              this.props.addActive();
            }}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = XActiveView;
