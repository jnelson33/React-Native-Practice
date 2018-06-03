/**
 * @flow
 * @providesModule App
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   View,
 } from 'react-native';
 import {
   createBottomTabNavigator,
 } from 'react-navigation';
 import {
   Icon,
 } from 'react-native-elements';
 import {
   Provider,
   connect,
 } from 'react-redux';
 import { configureStore } from 'XConfigureStore';
 import ScreenOneView from 'ScreenOneView';
 import ScreenTwoView from 'ScreenTwoView';
 import ScreenThreeView from 'ScreenThreeView';

const kRootTabRoutes = {

  World_Diplomacy: {
    screen: ScreenOneView,
    navigationOptions: {
      header: null,
      title: 'Back',
      tabBarLabel: 'World Diplomacy',
      tabBarIcon: (config: {focused: boolean, tintColor: string}) => (
        <Icon
          name="map"
          color={config.tintColor}
        />
      ),
    },
  },

  Economy: {
    screen: ScreenTwoView,
    navigationOptions: {
      header: null,
      title: 'Back',
      tabBarLabel: 'Economy',
      tabBarIcon: (config: {focused: boolean, tintColor: string}) => (
        <Icon
          name="attach-money"
          color={config.tintColor}
        />
      ),
    },
  },

  Military: {
    screen: ScreenThreeView,
    navigationOptions: {
      header: null,
      title: 'Back',
      tabBarLabel: 'Military',
      tabBarIcon: (config: {focused: boolean, tintColor: string}) => (
        <Icon
          name="assistant-photo"
          color={config.tintColor}
        />
      ),
    },
  },
};

const kRootTabConig = {
  initialRouteName: 'Economy',
  tabBarOptions: {
    activeTintColor: '#e74c3c',
    labelStyle: {
      fontSize: 12,
    },
    style: {
       backgroundColor: 'white',
    },
  },
}

const AppRootNavigator = createBottomTabNavigator(kRootTabRoutes, kRootTabConig);

// Redux setup
const store = configureStore();
const Root = () => {
  return (
    <Provider store={store}>
      <AppRootNavigator />
    </Provider>
  )
}

module.exports = Root;
