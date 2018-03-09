'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ViewPagerAndroid,
  Image
}  from 'react-native';

const util = require('util');
export default class Intro extends Component {
  render() {
    console.log("this.props.navigation =" + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ViewPagerAndroid style={styles.Pager} initialPage={0}>
          <View style={styles.Pager1}>
            <Text style={styles.Title}>Welcome to XDANA </Text>
            <Image source={require('./asset/ic_retirement.png')} style={{marginTop:120, width: 50, height: 50}}/>
            <Text style={styles.Subtitle}>Retirement </Text>
            <Text style={styles.Details}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
          </View>
          <View style={styles.Pager2}>
            <Text style={styles.Title}>Welcome to XDANA </Text>
            <Image source={require('./asset/ic_asset.png')} style={{marginTop:120, width: 50, height: 50}}/>
            <Text style={styles.Subtitle}>Life Improvement</Text>
            <Text style={styles.Details}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
          </View>
          <View style={styles.Pager3}>
            <Text style={styles.Title}>Welcome to XDANA </Text>
            <Image source={require('./asset/ic_asset.png')} style={{marginTop:120, width: 50, height: 50}}/>
            <Text style={styles.Subtitle}>Asset investment </Text>
            <Text style={styles.Details}>In order to finish your goal creation, you need to connect to your bank to set up auto saving every month. </Text>
          </View>
        </ViewPagerAndroid>
        <View style={{justifyContent:'center', alignItems:'center', zIndex:2, position:'absolute', marginBottom:20, marginLeft:30, marginRight:30, height:300}}>
        <TouchableOpacity
        style={{width: 300, height:50, backgroundColor:'white', alignItems:'center', justifyContent:'center', elevation:3 , borderRadius:2}}
        onPress = {() => navigate('Login')}>
          <Text style={{fontFamily:'TitilliumWeb-SemiBold',color:'#3393D0', fontSize:18, textAlign:'center'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{width: 300, height:50,  marginBottom:20, marginTop:10, backgroundColor:'rgba(0,0,0,0)', alignItems:'center', justifyContent:'center', elevation:3 }}
        onPress = {() => navigate('SignUp_Email')}>
          <Text style={{fontFamily:'TitilliumWeb-SemiBold',color:'white', fontSize:18, textAlign:'center'}}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    zIndex:0,
    position:'absolute',
    width:360,
    backgroundColor:'#3393D0',
    justifyContent:'flex-end'
  },
  Pager:{
    flex: 1,
    zIndex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:30,
    height:700
  },
  Pager1:{
    flex: 1,
    zIndex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:30,
    height:700,
    backgroundColor:'#3393D0'
  },
  Pager2:{
    flex: 1,
    zIndex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:30,
    height:700,
    backgroundColor:'#00A99E'
  },
  Pager3:{
    flex: 1,
    zIndex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:30,
    height:700,
    backgroundColor:'#F5841F'
  },
  Title: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'TitilliumWeb-Bold'
  },
  Subtitle: {
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    fontFamily:'TitilliumWeb-Bold'
  },
  Details: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
    fontFamily:'Roboto-Light'
  }
});
