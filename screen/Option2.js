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
export default class Option2 extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
    <View style={styles.Container}>
      <Text style={{color:'#58595B', fontSize:14, marginBottom:20, fontFamily:'Roboto-Regular'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')} >
        <View style={{height:80, width: 10, backgroundColor: '#00A99E'}}>
        </View>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Cars </Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')}>
        <View style={{height:80, width: 10, backgroundColor: '#00A99E'}}>
        </View>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>House </Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')}>
        <View style={{height:80, width:10, backgroundColor: '#00A99E'}}>
        </View>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Phone</Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')}>
        <View style={{height:80, width:10, backgroundColor: '#00A99E'}}>
        </View>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Other</Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
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
  ContentBox:{
    height:80,
    width: 320,
    elevation:3,
    marginBottom:10,
    backgroundColor: 'white',
    flexDirection:'row',
    borderRadius:3
  },
  ContentText: {
    fontSize:14,
    color:'#58595B',
    marginLeft:20,
    marginBottom:20,
    fontFamily:'Roboto-Light'
  },
  ContentTitle: {
    flex:4,
    fontSize:20,
    color:'#00A99E',
    marginLeft:20,
    marginTop:10,
    fontFamily:'TitilliumWeb-Bold'
  }
})
