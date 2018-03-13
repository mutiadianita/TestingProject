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
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class MainMenu extends Component {
  render() {
    var {navigate} = this.props.navigation;

    return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('Option1')} >
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={styles.ContentHeader}>
          <Text style={styles.ContentTitle}>Retirement</Text>
          <Image source={require('./asset/ic_retirement.png')} style={{flex:1,width: 40, height: 40}}/>
        </LinearGradient>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('Option2')} >
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#8FC196', '#00A99E']} style={styles.ContentHeader}>
          <Text style={styles.ContentTitle}>Life Improvement</Text>
          <Image source={require('./asset/ic_retirement.png')} style={{flex:1,width: 40, height: 40}}/>
        </LinearGradient>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('Option3')} >
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#F5841F', '#DE6157']} style={styles.ContentHeader}>
          <Text style={styles.ContentTitle}>Asset Improvement</Text>
          <Image source={require('./asset/ic_asset.png')} style={{flex:1,marginTop:20,width: 40, height: 40}}/>
        </LinearGradient>
        <Text style={styles.ContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
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
    padding:20
  },
  ContentHeader: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection:'row',
    height:110, width: 320,
    padding: 20
  },
  ContentBox:{
    height:160,
    width: 320,
    elevation:10,
    marginBottom:15,
    borderRadius:10,
    backgroundColor: 'white'
  },
  ContentText: {
    fontSize:14,
    color:'#58595B',
    margin:5,
    marginLeft:20,
    fontFamily:'Roboto-Regular'
  },
  ContentTitle: {
    flex:4,
    fontSize:20,
    color:'white',
    fontFamily:'TitilliumWeb-Bold'
  }
})
