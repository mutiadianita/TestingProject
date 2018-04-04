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
        <View style={{alignItems:'center', justifyContent:'center', height: Size.BUTTON_HEIGHT, width:Size.IMAGE_NW, borderRadius:Size.BUTTON_HEIGHT/2, backgroundColor:'#3393D0', margin: Size.PADDING_MID}}>
        <Text style={{color:'#FFFFFF', textAlign:'center',alignItems:'center'}}> Hello! Nice to meet you!</Text>
        </View>
      </View>
      <View style={{height:Size.BOX_HEIGHT, backgroundColor:'#FFFFFF', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <TextInput
      style={{width: Size.TI_WIDTH, height:Size.BUTTON_HEIGHT}}
      placeholderTextColor='#58595B'
      underlineColorAndroid='#58595B'
      editable={true}
      />
      <View style={{alignItems:'center', justifyContent:'center',marginLeft:Size.PADDING_SMALL,height: Size.BUTTON_HEIGHT, width:Size.BUTTON_HEIGHT, borderRadius:Size.PADDING_TI, backgroundColor:'#3393D0'}}/>
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
    paddingTop: Size.PADDING,
    backgroundColor:'white'
  }
});
