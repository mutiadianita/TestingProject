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
export default class Step3 extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={{flex:1}}>
      <View style={styles.Container}>
        <Image source={{uri:'graphic_register_3'}} resizeMode="contain" style={{width: Size.IMAGE_STEP, height:Size.IMAGE_STEP}}/>
        <Text style={{fontSize: Size.TEXT_TITLEL, color: '#3393D0', fontFamily:'TitilliumWeb-Bold', marginTop:Size.BUTTON_HEIGHT}}>Last step</Text>
        <Text style={{fontSize: Size.TEXT_LABELS, color: '#58595B', marginLeft:Size.PADDING_MID, marginRight:Size.PADDING_MID, textAlign:'center', fontFamily:'Roboto-Light'}}>Last, we also need to ask you a few questions to best guide you in reaching your dream.</Text>
      </View>
        <View style={{justifyContent:'flex-end', alignItems:'flex-end', paddingBottom:Size.PADDING_LONG, paddingRight:Size.PADDING, backgroundColor:'#FFFFFF'}}>
        <TouchableOpacity
          style={styles.RoundButton}
          onPress = {() => navigate('Question1')}>
          <Image source={{uri:'ic_next_white'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height: Size.BUTTON_ICON}}/>
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
