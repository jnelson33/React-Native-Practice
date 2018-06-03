/**
 * @flow
 * @providesModule XLoginError
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
   TouchableOpacity,
   KeyboardAvoidingView
 } from 'react-native';
 import {Icon} from 'react-native-elements';
 type Props = {
   type: string,
   firstLine: string,
   secondLine: string,
   showNotification: bool,
   // handleClosingNotification: string,
 }
type State = {}

class XLoginError extends React.PureComponent<Props, State> {
  closeBox() {}
  render() {
    const {type, firstLine, secondLine, showNotification} = this.props;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.ErrorBox}>
          <Text style={styles.Error}> {type} </Text>
          <TouchableOpacity style={styles.closeBox}>
            <Icon
              name='close'
              color='grey'
              onPress={this.closeBox}
              />
          </TouchableOpacity>
          <Text style={styles.ErrorText}> {firstLine} </Text>
          <Text style={styles.ErrorText}> {secondLine} </Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  ErrorBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
  ErrorText: {
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    color: 'black',
  },
  Error: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    color: 'black',
  },
  closeBox: {
    position: 'absolute',
    right: 10,
    top: 2,

  },
});

module.exports = XLoginError;
