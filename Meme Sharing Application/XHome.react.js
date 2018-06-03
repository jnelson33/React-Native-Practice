/**
 * @flow
 * @providesModule XHome
 */
 "use strict";
 import React, { Component } from 'react';
 import {
   StyleSheet,
 } from 'react-native';
 import XSwitchNavigator from 'XSwitchNavigator';
 import { YellowBox } from 'react-native';
 import XUserLocationContainer from 'XUserLocationContainer';

 YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

 type Props = {}
 type State = {}

 class XHome extends React.PureComponent<Props, State> {
   render() {
     return (<XSwitchNavigator />)
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });

 module.exports = XHome;
