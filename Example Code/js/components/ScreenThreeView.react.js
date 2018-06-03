/**
 * @flow
 * @providesModule ScreenThreeView
 */
 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
   Image,
   TouchableOpacity,
 } from 'react-native';

 // import { createStackNavigator } from 'react-navigation';
 import DeckList from 'DeckList';
 import AddCity from 'AddCity';
 import MyList from 'MyList';
 import {
   Slider,
   Icon,
} from 'react-native-elements';

type Props = {};
type State = {
  count: number,
  value: number,
};


class ScreenThreeView extends Component<Props, State> {
  state: State = {
    count: 0,
    value: 1,
  }
  data = ['Example One', 'Example Two', 'Example Three', 'Example Four', 'Example Five'];

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '80%', alignItems: 'stretch', justifyContent: 'center', color: '#708090', paddingTop: 10}}>
          <Text style={styles.valText}>
            Value: {this.state.value}
          </Text>
          <Slider
            value={this.state.value}
            onValueChange={(value) => this.setState({value})} />
        </View>

        <View style={{width: '100%'}}>
            <MyList data={this.data}/>
        </View>
          <Text style={styles.bottomText}>
            Project by: Jonathan Nelson
          </Text>
      </View>
    );
    // return this._renderBoxes();
  }

  _renderDeckList(): React$Element<any> {
    return (
      <DeckList message= "Hello World?" />
    );
  }

  _renderButton(): React$Element<any> {
    return (
      <TouchableOpacity
        onPress={this._onButtonPress}
        style={styles.button}>
        <Text style={styles.buttonText}>
          Press Me
        </Text>
      </TouchableOpacity>
    );
  }

  _onButtonPress = (): void => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  _renderImage(): React$Element<any> {
    return (
      <Image
        style={styles.image}
        source={{uri:'https://i.imgur.com/y6eE8fm.jpg'}}
      />
    );
  }

  // _renderBoxes(): React$Element<any> {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.box1} />
  //       <View style={styles.box2} />
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    // marginTop: 100,
    // borderColor: 'red',
    borderWidth: 0,
    backgroundColor: '#e1e6ef',
    flexDirection: 'column',
    justifyContent: 'flex-end', // primary
    alignItems: 'center', // secondary
  },
  bottomText: {
    fontSize: 12,
    padding: 10,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',

  },
  valText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',

  },



  // button: {
  //   width: 100,
  //   height: 50,
  //   backgroundColor: '#03A9F4',
  //   borderRadius: 15,
  //   flexDirection: 'row',
  //   justifyContent: 'center', // primary
  //   alignItems: 'center', // secondary
  // },
  // buttonText: {
  //   fontSize: 20,
  //   color: 'white',
  // },
  // box1: {
  //   // flex: 0.5,
  //   width: 100,
  //   height: 100,
  //   // borderColor: 'red',
  //   // borderWidth: 3,
  //   backgroundColor: 'orange',
  // },
  // box2: {
  //   width: 100,
  //   height: 100,
  //   // flex: 0.5,
  //   // borderColor: 'red',
  //   // borderWidth: 3,
  //   backgroundColor: 'blue',
  // },
  image: {
    width: 200,
    height: 100,
    marginTop: -10,
    // borderColor: '#ED1D27',
    // borderWidth: 1000,
  }
});


// <View style={styles.image}>
//   {this._renderImage()}
// </View>

//
// <Icon
//   name='g-translate'
//   color='#00aced'
// />
//

module.exports = ScreenThreeView;
