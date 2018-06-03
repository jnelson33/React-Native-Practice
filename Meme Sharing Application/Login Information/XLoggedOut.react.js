/**
 * @flow
 * @providesModule XLoggedOut
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   View,
 } from 'react-native';
 import {
   Button,
   Text,
 } from 'react-native-elements'

type Props = {}
type State = {}

class XLoggedOut extends React.PureComponent<Props, State> {

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.IntroText}> Welcome to the Meme Market!  </Text>
          <View style={styles.flexMove}> </View>
          <View style={styles.Button}>
            <Button
              backgroundColor= '#4C4C4B'
              title="Create an Account"
              color= 'white'
              rounded= {true}
              onPress={() => this.props.navigation.navigate('CreateAccount')}
            />
          </View>
          <View style={styles.Button}>
            <Button
              backgroundColor= '#353536'
              title="Login"
              rounded= {true}
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
          <Text style={styles.terms}> By proceeding, you are agreeing to our Terms and Conditions.  </Text>
      </View>
    )
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('CreateAccount');
  };

}

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#8AAAB2',

  },

  IntroText: {
    padding: 22,
    fontSize: 25,
    justifyContent: 'flex-end',
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },

  flexMove: {
    padding: '20%',
  },

  Button: {
    // textAlign: 'center',
    justifyContent: 'center',
    // fontWeight: 'bold',
    paddingBottom: 2,
  },

  terms: {
    color: 'white',
    justifyContent: 'flex-end',
    textAlign: 'center',
    paddingTop: '5%',
    fontWeight: '100',
    fontSize: 14,
  },

});

module.exports = XLoggedOut;
