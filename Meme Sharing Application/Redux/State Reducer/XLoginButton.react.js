/**
 * @flow
 * @providesModule XLoginButton
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
import {Button} from 'react-native-elements';

type Props = {
  login: number,
  makeActive:() => void,
  makeInactive:() => void,
  setUsername: (username: string) => void,
  navigation: Object,
  pickDirection: string,
  username: string,
  password: string,
}
type State = {}

class XLoginButton extends React.PureComponent<Props, State> {

  render() {
      if (this.props.pickDirection == 'logout')
      {
        return (<View>
            <Button
              backgroundColor= '#353536'
              title="Logout"
              rounded= {true}
              onPress={ () => { this.props.makeInactive()
                                this.props.setUsername('')
                                this.props.navigation.navigate('loggedOut') } }
            />
                </View> )
      }
      else
      {
        return (<View>
                  <Button
                    backgroundColor= '#353536'
                    title="Login"
                    rounded= {true}
                    onPress={ () => { this.props.makeActive()
                                      this.props.setUsername(this.props.username)
                                      this.props.navigation.navigate('Home') } }
                  />
                </View> )
      }
  }
}

module.exports = XLoginButton;
