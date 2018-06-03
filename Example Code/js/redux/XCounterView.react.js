/**
 * @flow
 * @providesModule XCounterView
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
  count: number,
  onClick: () => void,
  addLick: (id: number) => void,
}
type State = {}

class XCounterView extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
          <Button
            title="add like"
            onPress={() => {
              this.props.addLick(15)
            }}
          />
          <Text style={styles.yearText}> Year: {this.props.count + 2000}</Text>
          <View style={styles.Button}>
            <Button
              title="Next Turn"
              onPress={this.props.onClick}
            />
          </View>
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
  Button: {
    justifyContent: 'flex-end', // primary
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#E94B3C',
  },
  yearText: {
    paddingBottom: 2,
    fontWeight: 'bold',
  },

});

module.exports = XCounterView;
