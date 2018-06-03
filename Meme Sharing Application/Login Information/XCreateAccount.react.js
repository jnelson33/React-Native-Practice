/**
 * @flow
 * @providesModule XCreateAccount
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
   TextInput
 } from 'react-native';
 import {
   Button,
 } from 'react-native-elements';
 import XStateViewContainer from 'XStateViewContainer';

type Props = {}
type State = {
  username: string,
  password: string,
}

class XCreateAccount extends React.PureComponent<State, Props> {
  constructor (props:Props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
  }

  render() {
    return (
      <KeyboardAvoidingView  style={styles.container}>
        <View style={styles.container}>
          <ScrollView >
            <Text style={styles.IntroText}> Create an Account: {this.props.login} </Text>
            <View style={styles.containerInput}>
              <Text style = {styles.labelText}> Username: </Text>
              <TextInput style= {styles.input}
                autoCorrect= {false}
                secureTextEntry={false}
                username={this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
              />
                <Text style = {styles.labelText}> Password: </Text>
                <TextInput style= {styles.input}
                  autoCorrect= {false}
                  secureTextEntry={true}
                  password={this.state.password}
                  onChangeText={(text) => this.setState({ password: text })}
                />
              </View>
            <View style={styles.Button}>
              <XStateViewContainer
                navigation={this.props.navigation}
                pickDirection= 'CreateAccount'
                username= {this.state.username}
                password= {this.state.password}
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
    textAlign: 'left',
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
  containerInput: {
    flex: 1,
    display: 'flex',
    paddingLeft: 12,
  },
  labelText: {
    fontSize: 15,
    textAlign: 'left',
    justifyContent: 'center',
    fontWeight: '700',
    color: 'white',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderBottomWidth: 1.5,
    marginLeft: 25,
    marginRight: 40,
    marginBottom: 10,
  },

});


module.exports = XCreateAccount;
