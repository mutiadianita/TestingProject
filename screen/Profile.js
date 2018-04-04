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
export default class Profile extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <TouchableOpacity onPress = {() => navigate('RiskResult')} style={styles.Box}>
        <View style={{width:Size.PICKER_WIDTH}}>
          <Text style={styles.Title}>Low risk</Text>
          <Text style={styles.Subtitle}>Change your investment strategy</Text>
        </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={{uri: 'ic_next_black'}} resizeMode="contain" style={{width: Size.PADDING, height: Size.PADDING}}/>
          </View>
        </TouchableOpacity>
        <View style={{flex: 1, zIndex:2}}>
          <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{paddingTop:Size.OPTION_HEIGHT,flexDirection:'row',backgroundColor:'#3393D0', height:Size.IMAGE_NH,padding: Size.PADDING_MID}}>
            <Image source={{uri:'bapak'}} resizeMode="cover" style={{height:Size.PADDING_LONG, width:Size.PADDING_LONG, borderRadius:Size.PADDING_LONG/2}}/>
            <View style={{marginLeft:Size.TEXT_LABELS, width:Size.PROFILE_WIDTH}}>
              <Text style={{fontSize:Size.TEXT_DETAILL, color:'#FFFFFF', fontFamily:'SourceSansPro-Regular'}}>Good Evening,</Text>
              <Text style={{ fontSize:Size.TEXT_LABELL, color:'#FFFFFF', fontFamily:'SourceSansPro-Bold'}}>Stanley Santoso</Text>
            </View>
            <TouchableOpacity onPress = {() => navigate('EditProfile')}>
            <Image source={{uri: 'ic_edit_white'}} resizeMode="contain" style={{width: Size.PADDING_TI, height: Size.PADDING_TI}}/>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={{zIndex:2, height:Size.CBOX_HEIGHT*2, backgroundColor:'white', paddingTop:Size.PADDING, paddingLeft:Size.PADDING_MID}}>
          <TouchableOpacity onPress = {() => navigate('MyBank')} style={styles.Button}>
            <Image source={{uri: 'ic_bank'}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
            <Text style={styles.ButtonText}>Bank Account</Text>
          </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('HomeStatus')} style={styles.Button}>
            <Image source={{uri: 'ic_dream_big'}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
            <Text style={styles.ButtonText}>Archived Dreams</Text>
          </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('About')} style={styles.Button}>
            <Image source={{uri: 'ic_about'}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
            <Text style={styles.ButtonText}>About Us</Text>
            </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('FAQ')} style={styles.Button}>
            <Image source={{uri: 'ic_faq'}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
            <Text style={styles.ButtonText}>FAQ</Text>
          </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('Feedback')} style={styles.Button}>
            <Image source={{uri: 'ic_feedback'}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
            <Text style={styles.ButtonText}>Live Chat</Text>
          </TouchableOpacity>
          <View style={styles.Line}/>
          <TouchableOpacity onPress = {() => navigate('Intro')} style={styles.Button}>
            <Image source={{uri: 'ic_logout'}} resizeMode="contain" style={{width: Size.IMAGE_ICON, height: Size.IMAGE_ICON}}/>
            <Text style={styles.ButtonText}>Log Out</Text>
          </TouchableOpacity>
          <View style={styles.Line}/>
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
    marginTop:Size.TEXT_DETAILL*10,
    zIndex:3,
    height: Size.BOX_HEIGHT,
    width:Size.PAGER_WIDTH,
    marginLeft:Size.PADDING_MID,
    borderRadius:Size.PADDING_SMALL,
    backgroundColor:'white',
    elevation:Size.ELEVATION,
    padding:Size.PADDING_SMALL
  },
  Title: {
    fontFamily:'TitilliumWeb-Bold',
    fontSize:Size.TEXT_LABELL,
    color:'#58595B'
  },
  Subtitle: {
    fontFamily:'Roboto-Regular',
    fontSize:Size.TEXT_LABELS,
    color:'#58595B'
  },
  Button:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  ButtonText: {
    marginLeft:Size.PADDING_SMALL,
    color: 'rgba(0,0,0,0.60)',
    fontSize:Size.TEXT_LABELS,
    fontFamily:'Roboto-Medium'
  },
  Line: {
    height:1,
    width:Size.PICKER_WIDTH,
    marginLeft: Size.TEXT_TITLEL,
    backgroundColor:'#D8D8D8'
  }
});
