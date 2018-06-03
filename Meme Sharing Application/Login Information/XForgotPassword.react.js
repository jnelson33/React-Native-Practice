/**
 * @flow
 * @providesModule XForgotPassword
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   ScrollView,
   KeyboardAvoidingView,
 } from 'react-native';
 import {
   Button,
 } from 'react-native-elements';
import XInput from 'XInput';

type Props = {}
type State = {}

class XForgotPassword extends React.PureComponent<Props, State> {
  Proceed() {
    alert('Proceed Clicked');
  }
  render() {
    return (
      <KeyboardAvoidingView  style={styles.container}>
        <View style={styles.container}>
          <ScrollView >
            <Text style={styles.IntroText}> Forgot your password? </Text>
            <XInput
             labelText="Please enter your email address:"
             inputType="Username"
            />
            <View style={styles.Button}>
              <Button
                backgroundColor= '#353536'
                title="Proceed"
                rounded= {true}
                onPress= {this.Proceed}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#8AAAB2',
  },

  IntroText: {
    marginLeft: 18,
    fontSize: 25,
    padding: 12,
    justifyContent: 'center',
    fontWeight: '400',
    color: 'white',
  },
  Button: {
    justifyContent: 'center',
    paddingBottom: 2,
    marginLeft: '10%',
    marginRight: '10%',

  },
});

module.exports = XForgotPassword;
