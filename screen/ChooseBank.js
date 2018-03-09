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
export default class ChooseBank extends Component {
  render() {
    var {navigate} = this.props.navigation;

    return (
    <View style={styles.Container}>
      <Text style={{color:'#58595B', fontSize:14, marginBottom:20, fontFamily:'Roboto-Light'}}>Please choose your bank</Text>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('BankAccount')} >
        <View style={{height:80, width: 10, backgroundColor: '#135788'}}>
        </View>
        <View style={{flexDirection:'column', flex: 3}}>
        <Image source={require('./asset/Mandiri.png')} style={{alignItems:'center',marginTop:20, marginLeft:20, marginBottom:20, width: 130, height: 40}}/>
        </View>
        <Image source={require('./asset/ic_back_blue.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox}>
        <View style={{height:80, width: 10, backgroundColor: '#135788'}}>
        </View>
        <View style={{flexDirection:'column', flex: 3}}>
          <Image source={require('./asset/BCA.png')} style={{alignItems:'center',marginTop:20, marginLeft:20, marginBottom:20, width: 130, height: 40}}/>
        </View>
        <Image source={require('./asset/ic_back_blue.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 1,
    flexDirection:'column',
    padding:20
  },
  ContentBox:{
    height:80,
    width: 320,
    elevation:3,
    marginBottom:10,
    backgroundColor: 'white',
    flexDirection:'row',
    borderRadius:3
  }
})
