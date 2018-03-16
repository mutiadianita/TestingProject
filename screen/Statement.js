import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  ViewPagerAndroid,
  CheckBox
}  from 'react-native';
const util = require('util');
export default class Statement extends Component {
  render() {
    var {navigate} = this.props.navigation;

    return (
  <View style={{flex:1}}>

    <View style={styles.Container}>
      <Text style={{fontSize: 16, color: '#58595B', fontFamily:'SourceSansPro-Regular'}}>1. I am fully aware and understand about my investment risk profile</Text>
      <Text style={{fontSize: 16, color: '#58595B', textAlign:'left', marginTop:20, fontFamily:'SourceSansPro-Regular'}}>2. The purchase of mutual fund i do solely is my own decision and desire without
           any coercion from other parties</Text>
           <View style={{ flexDirection: 'row', height: 40, width:270, marginTop:30}}>
             <CheckBox title='Click Here'/>
             <Text style={styles.Check}>I Agree</Text>
           </View>
    </View>

    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
    <View style={{flex:1,alignItems:'flex-end', justifyContent:'flex-end',paddingRight:30, paddingBottom:40, backgroundColor:'#FFFFFF'}}>
      <TouchableOpacity
      style={styles.RoundButton}
        onPress = {() => navigate('RiskResult')}>
        <Image source={require('./asset/ic_next_white.png')} style={{width: 46, height: 46}}/>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:40
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 5,
    marginTop:7,
    fontSize:14,
    width:230,
    fontFamily:'Roboto-Regular'
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
})
