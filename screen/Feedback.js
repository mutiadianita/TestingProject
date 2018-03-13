import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  TextInput
}  from 'react-native';
const util = require('util');
export default class LearnMore extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1}}>
      <View style={{flex:8}}>
        <View style={{alignItems:'center', justifyContent:'center', height: 50, width:200, borderRadius:25, backgroundColor:'#3393D0', margin: 20}}>
        <Text style={{color:'#FFFFFF', textAlign:'center',alignItems:'center'}}> Hello! Nice to meet you!</Text>
        </View>
      </View>
      <View style={{height:70, backgroundColor:'#FFFFFF', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <TextInput
      style={{width: 280, height:50}}
      placeholderTextColor='#58595B'
      underlineColorAndroid='#58595B'
      editable={true}
      />
      <View style={{alignItems:'center', justifyContent:'center',marginLeft:10,height: 50, width:50, borderRadius:25, backgroundColor:'#3393D0'}}/>
        <Text style={{color:'#FFFFFF',textAlign:'center'}}>></Text>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    backgroundColor:'white'
  }
});
