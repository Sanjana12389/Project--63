import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
        <TextInput
          style={StyleSheet.inputBox}
          onChangeText={text => {
            this.setState({
              text: text,
              inSearchPressed: false,
              word:"Loading...",
              lexicalCategory:'',
              examples:[],
              definition:""
            });
          }}
        />
      </View>
    )
  }
}
