import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
}  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class Home extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <TouchableOpacity onPress = {() => navigate('Strategy')} style={styles.Box}>
        <View style={{width:280}}>
          <Text style={styles.Title}>Low risk</Text>
          <Text style={styles.Subtitle}>Change your investment strategy</Text>
        </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('./asset/ic_next_black.png')} style={{width: 30, height: 30}}/>
          </View>
        </TouchableOpacity>
        <View style={{flex: 1, zIndex:2}}>
          <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{paddingTop:80,flexDirection:'row',backgroundColor:'#3393D0', height:200,padding: 20}}>
            <View style={{height:40, width:40, borderRadius:20, backgroundColor:'grey'}}>
            </View>
            <View style={{marginLeft:16, width:240}}>
              <Text style={{fontSize:14, color:'#FFFFFF', fontFamily:'SourceSansPro-Regular'}}>Good Evening,</Text>
              <Text style={{ fontSize:20, color:'#FFFFFF', fontFamily:'SourceSansPro-Bold'}}>Stanley Santoso</Text>
            </View>
            <TouchableOpacity onPress = {() => navigate('EditProfile')}>
            <Image source={require('./asset/ic_edit_white.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={{zIndex:2, height:500, backgroundColor:'white', paddingTop:30, paddingLeft:20}}>
          <TouchableOpacity onPress = {() => navigate('MyBank')} style={styles.Button}>
            <Image source={require('./asset/ic_bank.png')} style={{width: 24, height: 24}}/>
            <Text style={styles.ButtonText}>Bank Account</Text>
            </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('About')} style={styles.Button}>
            <Image source={require('./asset/ic_about.png')} style={{width: 24, height: 24}}/>
            <Text style={styles.ButtonText}>About Us</Text>
            </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('FAQ')} style={styles.Button}>
            <Image source={require('./asset/ic_faq.png')} style={{width: 24, height: 24}}/>
            <Text style={styles.ButtonText}>FAQ</Text>
          </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('Feedback')} style={styles.Button}>
            <Image source={require('./asset/ic_feedback.png')} style={{width: 24, height: 24}}/>
            <Text style={styles.ButtonText}>Live Chat</Text>
          </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('Intro')} style={styles.Button}>
            <Image source={require('./asset/ic_logout.png')} style={{width: 24, height: 24}}/>
            <Text style={styles.ButtonText}>Log Out</Text>
          </TouchableOpacity>
          <View style={{height:1, width:288, marginLeft: 36,backgroundColor:'#D8D8D8'}}/>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    zIndex:0,
    flex: 1,
    backgroundColor:'white',
     position: 'absolute'
  },
  Box: {
    flexDirection:'row',
    position: 'absolute',
    marginTop:160,
    zIndex:3,
    height: 70,
    width:320,
    marginLeft:20,
    borderRadius:3,
    backgroundColor:'white',
    elevation:5,
    padding:10
  },
  Title: {
    fontFamily:'TitilliumWeb-Bold',
    fontSize:20,
    color:'#58595B'
  },
  Subtitle: {
    fontFamily:'Roboto-Regular',
    fontSize:16,
    color:'#58595B'
  },
  Button:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  ButtonText: {
    marginLeft:10,
    color: 'rgba(0,0,0,0.60)',
    fontSize:16,
    fontFamily:'Roboto-Medium'
  },
  Line: {
    height:1,
    width:288,
    marginLeft: 36,
    backgroundColor:'#D8D8D8'
  }
});
