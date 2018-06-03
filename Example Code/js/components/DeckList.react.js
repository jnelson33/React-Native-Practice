/**
 * @flow
 * @providesModule DeckList
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
  message: string,
}
type State = {
  showName: boolean,
  name: string,
  message: string,
}


class DeckList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Brad',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi There!'
  }

  render() {
      let name = this.state.showName ? this.state.name : 'No Name!'

      return (
        <View>
          <Text> {this.state.message}</Text>
          <Text> {name} </Text>
        </View>
      )
    }
  }

module.exports = DeckList;
