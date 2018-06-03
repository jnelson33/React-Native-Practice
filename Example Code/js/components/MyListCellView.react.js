/**
 * @flow
 * @providesModule MyListCellView
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
   TouchableOpacity,
 } from 'react-native';

type Props = {
  item: string,
}

class MyListCellView extends React.Component<Props> {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props === nextProps;
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPressCell}
        style={styles.cell}>
        <Text style={styles.flatListText}>
          {this.props.item}
        </Text>
      </TouchableOpacity>
    )
  }

  _onPressCell = (): void => {
    console.warn(this.props.item);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListText: {
    fontSize: 18,
    padding: 12,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',

  },
  cell: {
    width: '100%',
    height: 50,
    backgroundColor: '#667a9b',
    margin: 5,
  },
});

module.exports = MyListCellView;
