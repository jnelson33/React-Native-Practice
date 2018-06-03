/**
 * @flow
 * @providesModule XCameraRoll
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 import CameraRollPicker from 'react-native-camera-roll-picker';
 import { Icon, Button } from 'react-native-elements';


type Props = {}
type State = {
  selected: [],
}

class XCameraRoll extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
        selected: []
    };
  }

  getSelectedImages(image: []) {
    this.setState({
      selected: image,
    });
    console.log(this.state.selected);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Icon
            raised
            name='chevron-left'
            type='font-awesome'
            color='black'
            onPress={() => this.props.navigation.navigate('Home')} />
          <Button style={styles.Button}
            backgroundColor= 'white'
            title="Post"
            color= 'black'
            rounded= {true}
            onPress={() => this.props.navigation.navigate('Feed')} />
          />
        </View>
        <CameraRollPicker
          maximum= {1}
          callback={this.getSelectedImages.bind(this)} />
          assetType= 'All'
          backgroundColor= '#D9DBDD'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'flex-start',
    backgroundColor: '#3B79C3',
  },
  Button: {
    paddingTop: 13,
    marginLeft: '28%',
  },
  top: {
    flexDirection: 'row',
  },
});

module.exports = XCameraRoll;
