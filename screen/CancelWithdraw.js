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
export default class CancelWithdraw extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;

    return (
  <View style={{flex:1}}>

    <View style={styles.Container}>
      <Image source={{uri: 'graphic_withdraw'}} resizeMode="contain" style={{width: Size.IMAGE_STEP, height: Size.IMAGE_STEP}}/>
      <Text style={{fontSize: Size.TEXT_TITLEL, color: '#3393D0', fontFamily:'TitilliumWeb-Bold', marginTop:Size.BUTTON_HEIGHT}}>Cancel & Withdraw</Text>
      <Text style={{fontSize: Size.TEXT_LABELS, color: '#58595B', marginLeft:Size.PADDING_MID, marginRight:Size.PADDING_MID, textAlign:'center', fontFamily:'Roboto-Light'}}>
      Are you sure you want to cancel your dream and withdraw all your investment of Rp 145.000.000,00 that you have been investing in the past 17 month?</Text>
    </View>
    <View style={{justifyContent:'flex-end', alignItems:'flex-end', paddingBottom:Size.PADDING_LONG, paddingRight:Size.PADDING, backgroundColor:'#FFFFFF'}}>
      <TouchableOpacity
      style={styles.RoundButton}
        onPress = {() => navigate('CancelWithdrawForm')}>
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
