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
      <Text style={{fontSize: Size.TEXT_LABELS, color: '#58595B', fontFamily:'SourceSansPro-Regular'}}>1. I am fully aware and understand about my investment risk profile</Text>
      <Text style={{fontSize: Size.TEXT_LABELS, color: '#58595B', textAlign:'left', marginTop:Size.PADDING_MID, fontFamily:'SourceSansPro-Regular'}}>2. The purchase of mutual fund i do solely is my own decision and desire without
           any coercion from other parties</Text>
           <View style={{ flexDirection: 'row', height: Size.PADDING_LONG, width:Size.PICKER_WIDTH, marginTop:Size.PADDING}}>
             <CheckBox title='Click Here'/>
             <Text style={styles.Check}>I Agree</Text>
           </View>
    </View>

    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
    <View style={{flex:1,alignItems:'flex-end', justifyContent:'flex-end',paddingRight:Size.PADDING, paddingBottom:Size.PADDING_LONG, backgroundColor:'#FFFFFF'}}>
      <TouchableOpacity
      style={styles.RoundButton}
        onPress = {() => navigate('RiskResult')}>
        <Image source={require('./asset/ic_next_white.png')} style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
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
    padding:Size.PADDING_LONG
  },
  Check: {
    textAlign: 'left',
    color: '#58595B',
    fontSize:Size.TEXT_DETAILL,
    width:Size.CHECK,
    fontFamily:'Roboto-Regular'
  },
  RoundButton: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
})
