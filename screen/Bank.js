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
      <Image source={{uri: 'graphic_bank'}} resizeMode="contain" style={{width: Size.IMAGE_STEP, height: Size.IMAGE_STEP}}/>
      <Text style={{fontSize: Size.TEXT_TITLEL, color: '#3393D0',textAlign:'center', fontFamily: 'TitilliumWeb-Bold', marginTop:Size.BUTTON_HEIGHT}}>Connect Your Bank Account</Text>
      <Text style={{fontSize: Size.TEXT_LABELS, color: '#58595B', marginLeft:Size.PADDING_MID, marginRight:Size.PADDING_MID, textAlign:'center', fontFamily:'Roboto-Light'}}>In order to finish your dream creation, you need to connect your bank first.</Text>
    </View>
    <View style={{alignItems:'flex-end', justifyContent:'flex-end',paddingRight:Size.PADDING, paddingBottom:Size.PADDING_LONG, backgroundColor:'#FFFFFF'}}>
      <TouchableOpacity
      style={styles.RoundButton}
        onPress = {() => navigate('ChooseBank')}>
        <Image source={{uri: 'ic_next_white'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
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
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    marginTop: Size.PADDING_MID,
    backgroundColor:'#3393D0',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  }
})
