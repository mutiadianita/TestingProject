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
      <Text style={{color:'#58595B', fontSize:Size.TEXT_DETAILL, marginBottom:Size.PADDING_MID, fontFamily:'Roboto-Light'}}>Please choose your bank</Text>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('BankAccount')} >
        <View style={styles.Flag}>
        </View>
        <View style={{flexDirection:'column', flex: 3}}>
        <Image source={{uri: 'mandiri'}} style={{alignItems:'center',marginTop:Size.PADDING_MID, marginLeft:Size.PADDING_MID, marginBottom:Size.PADDING_MID, width: Size.BANK_WIDTH, height: Size.PADDING_LONG}}/>
        </View>
        <Image source={{uri: 'ic_back_blue'}} resizeMode="contain" style={{alignItems:'center',marginTop:Size.PADDING_MID, marginLeft:Size.PADDING_LONG, marginBottom:Size.PADDING_MID, width: Size.PADDING, height: Size.PADDING}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox}>
        <View style={styles.Flag}>
        </View>
        <View style={{flexDirection:'column', flex: 3}}>
          <Image source={{uri: 'bca'}} style={{alignItems:'center',marginTop:Size.PADDING_MID, marginLeft:Size.PADDING_MID, marginBottom:Size.PADDING_MID, width: Size.BANK_WIDTH, height: Size.PADDING_LONG}}/>
        </View>
        <Image source={{uri: 'ic_back_blue'}} resizeMode="contain" style={{alignItems:'center',marginTop:Size.PADDING_MID, marginLeft:Size.PADDING_LONG, marginBottom:Size.PADDING_MID, width: Size.PADDING, height: Size.PADDING}}/>
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
    padding:Size.PADDING_MID
  },
  ContentBox:{
    height:Size.OPTION_HEIGHT,
    width: Size.PAGER_WIDTH,
    elevation:3,
    marginBottom:Size.PADDING_SMALL,
    backgroundColor: 'white',
    flexDirection:'row',
    borderRadius:Size.PADDING_SMALL
  },
  Flag: {
    height:Size.OPTION_HEIGHT,
    width: Size.PADDING_SMALL,
    backgroundColor: '#135788',
    borderTopLeftRadius:Size.PADDING_SMALL,
    borderBottomLeftRadius:Size.PADDING_SMALL
  }
})
