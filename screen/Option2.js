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
export default class Option2 extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={{flex:1}}>
      <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#8FC196', '#00A99E']} style={{flex:1}}>
      <View style={{flexDirection:'row', paddingTop:35, paddingLeft:30, paddingRight:30}}>
      <Image source={require('./asset/ic_close_white.png')} style={{height: 24, width:24}}/>
      <Text style={{fontSize:20, fontFamily:'TitilliumWeb-Bold', color:'#FFFFFF', marginLeft:25}}>Life Improvement</Text>
      <Image source={require('./asset/ic_retirement.png')} style={{height: 50, width:50, marginLeft:50}}/>
      </View>
      </LinearGradient>
      <View style={styles.Container}>
      <Text style={{color:'#58595B', fontSize:14, marginBottom:20, fontFamily:'Roboto-Regular'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac </Text>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')} >
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Cars </Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')}>
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>House </Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')}>
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Phone</Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContentBox} onPress = {() => navigate('GoalAmount')}>
        <View style={styles.Flag}/>
        <View style={{flexDirection:'column', flex: 3}}>
          <Text style={styles.ContentTitle}>Other</Text>
          <Text style={styles.ContentText}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Image source={require('./asset/ic_next_black.png')} style={{alignItems:'center',marginTop:20, marginLeft:40, marginBottom:20, width: 40, height: 40}}/>
      </TouchableOpacity>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
    flex: 3,
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
  },
  Flag: {
    height:80,
    width: 10,
    backgroundColor: '#00A99E',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  }
})
