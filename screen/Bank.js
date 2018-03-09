import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ViewPagerAndroid
}  from 'react-native';
const util = require('util');
export default class Bank extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
  <View style={{flex:1}}>
    <View style={styles.Container}>
      <Text style={{fontSize: 36, color: '#3393D0',textAlign:'center', fontFamily: 'TitilliumWeb-Bold'}}>Connect Your Bank Account</Text>
      <Text style={{fontSize: 16, color: '#58595B', marginLeft:20, marginRight:20, textAlign:'center', fontFamily:'Roboto-Light'}}>In order to finish your dream creation, you need to connect your bank first.</Text>
    </View>
    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
    <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end'}}>
      <TouchableOpacity
      style={{width: 60, height: 60, borderRadius:30, marginTop: 20, marginBottom:40, marginRight:30, backgroundColor:'#3393D0', elevation:5}}
        onPress = {() => navigate('HowToPay')}>
        <Text style={{color:'white', fontSize:24, fontWeight:'bold', marginTop:10, marginLeft:25}}>></Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
