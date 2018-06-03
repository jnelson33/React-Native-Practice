/**
 * @flow
 * @providesModule MyList
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
   FlatList,
 } from 'react-native';

 import MyListCellView from 'MyListCellView';

type Props = {
  data: Array<string>,
}
type State = {}

class MyList extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        {this._renderFlatList()}
      </View>
    )
  }

  _renderItem = ({item}) => {
    return (
      <MyListCellView item={item}/>
    );
  }

  _keyExtractor = (item, index) => item;

  _renderFlatList(): React$Element<any> {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    // borderColor: 'red',
    borderWidth: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end', // primary

  },
});

module.exports = MyList;
