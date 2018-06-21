/**
 * @flow
 * @providesModule XScreenOne
 */
 "use strict";

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   FlatList,
   Image,
   Dimensions
 } from 'react-native';
 import XFlatListData from 'XFlatListData';
 import Geocoder from 'react-native-geocoder';


 const screenDimensions = {
   width: Dimensions.get('window').width - 15,
 }
 var NY = {
   lat: 40.7809261,
   lng: -73.9637594
 };

 type Props = {}
 type State = {
   cityName: string,
 }

 export default class XScreenOne extends Component<Props, State> {
   constructor(props: Props) {
     super(props);
     this.state = {
       cityName: 'Welcome!'
     }
   }

   componentDidMount()  {
     Geocoder.geocodePosition(NY).then(res => {
       console.log(res)
       var CityName= res["0"].locality
       console.log(CityName)
       this.setState({
         cityName: 'Welcome to ' + CityName + '!',
       })

      })
    .catch(err => console.log(err))
  }

    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.IntroText}> {this.state.cityName} </Text>
            <FlatList
                data={XFlatListData}
                renderItem={({item, index})=>
                <Image
                  source={{uri: item.imageUrl}}
                  style={styles.ImageStyle}
                >
                </Image>}
                numColumns= {1}
            >
            </FlatList>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AAAB2',
    paddingTop: 22,
    justifyContent: 'center',
  },
  IntroText: {
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent: 'center',

  },
  ImageStyle: {
    width: screenDimensions.width,
    height: screenDimensions.width,
    margin: 5,
  },
//   Icon: {
//     justifyContent: 'flex-end',
//     flex: 1,
//     paddingBottom: -100,
//   },
});
