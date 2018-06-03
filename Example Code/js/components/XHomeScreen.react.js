 /**
  * @flow
  * @providesModule XHomeScreen
  */
  "use strict";

import React from 'react';
import { Button, View, Text, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

type Props = { }

type State = {}

class HomeScreen extends React.Component<State, Props> {
  render() {
    return (
      <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    );
  }
}

class DetailsScreen extends React.Component<State, Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class XHomeScreen extends React.Component<State, Props> {
  render() {
    return <RootStack />;
  }
}
