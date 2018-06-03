/**
 * @flow
 * @providesModule XSwitchNavigator
 */
 import React, { Component } from 'react';
 import {
   TouchableOpacity,
 } from 'react-native';
 import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
  } from 'react-navigation';
 import XLoginScreen from 'XLoginScreen';
 import XCreateAccount from 'XCreateAccount';
 import XForgotPassword from 'XForgotPassword';
 import XLoggedOut from 'XLoggedOut';
 import XScreenOne from 'XScreenOne';
 import XScreenTwo from 'XScreenTwo';
 import XScreenThree from 'XScreenThree';
 import XScreenFour from 'XScreenFour';
 import XScreenFive from 'XScreenFive';
 import XSimulatedFeed from 'XSimulatedFeed';
 import { Icon } from 'react-native-elements';
 import XCameraRoll from 'XCameraRoll';
 import {
   Provider,
 } from 'react-redux';
 import { configureStore } from 'XConfigureStore';

 const kRootTabRoutes = {
   Feed: {
     screen: XScreenOne,
     navigationOptions: {
       header: null,
       padding: 50,
       title: 'Feed',
       tabBarLabel: 'Feed',
       tabBarIcon: (config: {focused: boolean, tintColor: string, }) => (
         <Icon
           name="map"
           color={config.tintColor}
         />
       ),
     },
   },

   Groups: {
     screen: XScreenTwo,
     navigationOptions: {
       header: null,
       title: 'Back',
       tabBarLabel: 'Groups',
       tabBarIcon: (config: {focused: boolean, tintColor: string}) => (
         <Icon
           name="group"
           color={config.tintColor}
         />
       ),
     },
   },

   Publish: {
     screen: XScreenThree,
     navigationOptions: {
       header: null,
       title: '',
       tabBarLabel: '',
       tabBarIcon: (config: {focused: boolean, tintColor: string, }) => (
          <Icon
            raised
            name="add"
            color={config.tintColor}
          />
       ),
     },
   },

   Explore: {
     screen: XScreenFour,
     navigationOptions: {
       header: null,
       title: 'Back',
       tabBarLabel: 'Explore',
       tabBarIcon: (config: {focused: boolean, tintColor: string}) => (
         <Icon
           name="location-city"
           color={config.tintColor}
         />
       ),
     },
   },

   Settings: {
     screen: XScreenFive,
     navigationOptions: {
       header: null,
       title: 'Back',
       tabBarLabel: 'Settings',
       tabBarIcon: (config: {focused: boolean, tintColor: string}) => (
         <Icon
           name="settings"
           color={config.tintColor}
         />
       ),
     },
   },

 };

 const kRootTabConig = {
   initialRouteName: 'Publish',
   tabBarOptions: {
     activeTintColor: 'black',
     labelStyle: {
       fontSize: 12,
     },
     style: {
        backgroundColor: '#e6eaf2',
     },
   },
 }

 const AppRootNavigator = createBottomTabNavigator(kRootTabRoutes, kRootTabConig);

 const AppStack = createStackNavigator (
   {
     Home: AppRootNavigator,
     CameraRoll: XCameraRoll,
     simulatedFeed: XSimulatedFeed,
   },

   {
     headerMode: 'none',
   }
  );

 const AuthStack = createStackNavigator (
   {
    loggedOut: XLoggedOut,
    CreateAccount: XCreateAccount,
    Login: XLoginScreen,
    forgotPassword: XForgotPassword,
   },
   {
     navigationOptions: {
       headerStyle: {
         backgroundColor: '#8AAAB2',
       },
      headerTintColor: '#fff',
      }
    });

 const store = configureStore();

 const ModalNavigator = createSwitchNavigator(
  {
    Main: AuthStack,
    Login: AppStack,
  });

 const Root = () => {
   return (
     <Provider store={store}>
       <ModalNavigator />
     </ Provider>
   )
 }

 module.exports = Root;
