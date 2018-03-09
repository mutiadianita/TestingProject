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

const util = require('util');
export default class Home extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <View style={styles.Box}>
          <View>
            <Text style={styles.Title}>Create a New Dream</Text>
            <Text style={styles.Subtitle}>Tap here to create a new Dream</Text>
          </View>
          <TouchableOpacity
            style={styles.Button}
            onPress = {() => navigate('MainMenu')}>
            <Text style={styles.ButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, zIndex:2}}>
          <View style={styles.Header}>
            <TouchableOpacity onPress = {() => navigate('Profile')}>
              <Image source={require('./asset/ic_account.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
              <Text style={styles.HeaderText}>Xdana</Text>
            <TouchableOpacity onPress = {() => navigate('Notification')}>
              <Image source={require('./asset/ic_notif_white.png')} style={{marginLeft:180,width: 30, height: 30}}/>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'#3393D0', padding: 20}}>
            <Text style={{fontSize:24, color:'white', fontFamily:'SourceSansPro-Bold'}}>Hi Stanley,</Text>
            <Text style={{fontSize:16, color:'#FEFEFE', fontFamily:'Roboto-Light'}}>Welcome to XDANA.</Text>
            <Text style={{fontSize:16, color:'#FEFEFE', marginBottom:30, marginTop:10, fontFamily: 'Roboto-Light'}}>Start investing now and reaching your dream.</Text>
          </View>
        </View>
        <View style={{zIndex:2, height:500, backgroundColor:'white', paddingTop:50, paddingLeft:20}}>
          <Text style={{fontSize:18, color:'#4D4D4C', fontFamily:'TitilliumWeb-SemiBold'}}>Knowledge Center</Text>
          <View style={{flexDirection:'row', flex:1}}>
          <ScrollView horizontal={true}>
            <TouchableOpacity onPress = {() => navigate('WhyInvest')}>
              <View style={styles.ContentBox}>
                <View style={styles.ImageBox}>
                </View>
                <Text style={{fontSize:16, color:'#58595B', margin:10}}>Why is it better to start investing early?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('Healthcare')}>
              <View style={styles.ContentBox}>
                <View style={styles.ImageBox}>
                </View>
                <Text style={{fontSize:16, color:'#58595B', margin:10}}>Healthcare Costs Can Add Up in Retirement</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('Healthcare')}>
              <View style={styles.ContentBox}>
                <View style={styles.ImageBox}>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
          </View>
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
    marginTop:190,
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
    fontSize:20,
    color:'#58595B',
    fontFamily:'TitilliumWeb-Bold'
  },
  Subtitle: {
    fontSize:16,
    color:'#58595B',
    fontFamily:'Roboto-Regular'
  },
  Button:{
    marginLeft:20,
    width: 50,
    height: 50,
    borderRadius:25,
    backgroundColor:'#00A99E',
    elevation:5
  },
  ButtonText: {
    color:'white',
    fontSize:36,
    marginLeft:15
  },
  Header: {
    padding:20,
    flexDirection:'row',
    backgroundColor:'#3393D0',
    zIndex:2
  },
  HeaderText: {
    marginLeft:20,
    fontSize:20,
    color:'white',
    fontFamily:'TitilliumWeb-Bold'
  },
  ContentBox: {
    marginTop:20,
    marginRight:20,
    width:200,
    height:250,
    elevation:5,
    backgroundColor:'white'
  },
  ImageBox: {
    width:200,
    height:180,
    backgroundColor:'grey'
  }
});
