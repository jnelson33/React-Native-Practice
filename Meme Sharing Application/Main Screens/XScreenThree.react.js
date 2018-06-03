/**
 * @flow
 * @providesModule XScreenThree
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   View,
   StyleSheet,
   Image,
   Text,
 } from 'react-native'
 import {Button} from 'react-native-elements';

type Props = {}
type State = {}

class XScreenThree extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text> Manage my portfolio </Text>
        <Button style={styles.Button}
          backgroundColor= '#353536'
          title="Publish a Meme"
          color= 'white'
          onPress={() => this.props.navigation.navigate('CameraRoll')}
        />
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
  Button: {
    marginLeft: '10%',
    marginRight: '10%',
    paddingBottom: 15,
  },

});

module.exports = XScreenThree;
