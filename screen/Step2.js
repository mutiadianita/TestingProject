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
export default class Step2 extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1}}>
      <View style={styles.Container}>
        <Text style={{fontSize: 36, color: '#3393D0', fontFamily:'TitilliumWeb-Bold'}}>Verify Your Data </Text>
        <Text style={{fontSize: 16, color: '#58595B', marginLeft:20, marginRight:20, textAlign:'center', fontFamily:'Roboto-Light'}}>We also need you to take a photo of yourself and your KTP to verifiy your identity.</Text>
      </View>
        <View style={{alignItems:'flex-end', justifyContent:'flex-end',paddingRight:30, paddingBottom:30, backgroundColor:'#FFFFFF'}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('ReviewSelfie')}>
            <Text style={{color:'white', fontSize:24, fontWeight:'bold', marginTop:10, marginLeft:25}}>></Text>
          </TouchableOpacity>
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
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:'#3393D0',
    elevation:5
  }
})
