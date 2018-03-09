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
        <Text style={{fontSize: 36, color: '#3393D0', fontFamily:'TitilliumWeb-Bold'}}>Last step</Text>
        <Text style={{fontSize: 16, color: '#58595B', marginLeft:20, marginRight:20, textAlign:'center', fontFamily:'Roboto-Light'}}>Last, we also need to ask you a few questions to best guide you in reaching your dream.</Text>
      </View>
        <View style={{alignItems:'flex-end', justifyContent:'flex-end', paddingBottom:30, paddingRight:30, backgroundColor:'#FFFFFF'}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 20, elevation:5,backgroundColor:'#3393D0'}}
            onPress = {() => navigate('Question1')}>
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
  }
})
