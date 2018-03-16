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
        <Image source={require('./asset/graphic_register_3.png')} style={{width: 180, height: 180}}/>
        <Text style={{fontSize: 36, color: '#3393D0', fontFamily:'TitilliumWeb-Bold', marginTop:48}}>Last step</Text>
        <Text style={{fontSize: 16, color: '#58595B', marginLeft:20, marginRight:20, textAlign:'center', fontFamily:'Roboto-Light'}}>Last, we also need to ask you a few questions to best guide you in reaching your dream.</Text>
      </View>
        <View style={{alignItems:'flex-end', justifyContent:'flex-end', paddingBottom:30, paddingRight:30, backgroundColor:'#FFFFFF'}}>
        <TouchableOpacity
          style={styles.RoundButton}
          onPress = {() => navigate('Question1')}>
            <Image source={require('./asset/ic_next_white.png')} style={{width: 46, height: 46}}/>
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
    marginTop: 20,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
})
