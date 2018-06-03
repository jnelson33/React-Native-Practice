/**
 * @flow
 * @providesModule XIdEditorView
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
   TextInput,
 } from 'react-native';

type Props = {
  id: number,
  setId: (id: number) => void,
}
type State = {
  text: string,
}

class XIdEditorView extends React.PureComponent<Props, State> {
  state = {
    text: this.props.id + "",
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(newText) => this.setState({
            text: newText,
          })}
          value={this.state.text}
        />
          <Button
            title="Set"
            onPress={() => {
              const id = parseInt(this.state.text);
              if (id !== undefined && id !== null) {
                this.props.setId(id);
              }
            }}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = XIdEditorView;
