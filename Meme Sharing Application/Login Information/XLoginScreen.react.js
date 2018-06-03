/**
 * @flow
 * @providesModule XLoginScreen
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   ScrollView,
   KeyboardAvoidingView,
   TextInput,
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

class XLoginScreen extends React.PureComponent<State, Props> {
  constructor (props: Props) {
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
            <Text style={styles.IntroText}> Login: </Text>
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
                pickDirection= 'Login'
                username= {this.state.username}
                password= {this.state.password}
              />
            </View>
            <View>
              <Button
                backgroundColor= '#8AAAB2'
                title='Forgot your password?'
                color='white'
                fontWeight= '400'
                onPress={() => this.props.navigation.navigate('forgotPassword') }
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

  ErrorBox: {
    justifyContent: 'flex-end',
    flex: .1,
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

module.exports = XLoginScreen;
