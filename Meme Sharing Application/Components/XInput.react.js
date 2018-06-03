/**
 * @flow
 * @providesModule XInput
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TextInput,
 } from 'react-native';

 type Props = {
   labelText: string,
   inputType: string,
 }

type State = {
}

class XInput extends React.PureComponent<Props, State> {
  render() {
    const { labelText, inputType } = this.props;
    return (
      <View style={styles.containerInput}>
          <Text style = {styles.labelText}> {labelText} </Text>
          <TextInput style= {styles.input}
            autoCorrect= {false}
            secureTextEntry={inputType === 'Password' ? true : false}
          />
      </View>
    )
  }
}


const styles = StyleSheet.create({
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

module.exports = XInput;
