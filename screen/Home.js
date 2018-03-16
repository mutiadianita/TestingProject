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
        <LinearGradient start={{x: 0.0, y: 0.025}} end={{x: 1.0, y: 1.0}} colors={['#5DC6C9', '#3393D0', '#135788']} style={{flex:6}}>
          <View style={styles.Header}>
            <TouchableOpacity onPress = {() => navigate('Profile')}>
              <Image source={require('./asset/ic_account.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
              <Text style={styles.HeaderText}>Xdana</Text>
            <TouchableOpacity onPress = {() => navigate('Notification')}>
              <Image source={require('./asset/ic_notif_white.png')} style={{marginLeft:180,width: 30, height: 30}}/>
            </TouchableOpacity>
          </View>
          <View style={{padding: 20}}>
            <Text style={{fontSize:36, color:'white', fontFamily:'TitilliumWeb-SemiBold'}}>Hi Stanley,</Text>
            <Text style={{fontSize:16, color:'#FEFEFE',marginTop:10, fontFamily: 'Roboto-Regular'}}>Start investing now and reach your dream.</Text>
          </View>
          <View style={styles.Box}>
            <View>
              <Text style={styles.Title}>Create a New Dream</Text>
              <Text style={styles.Subtitle}>Tap here to create a new Dream</Text>
            </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
              style={styles.Button}
              onPress = {() => navigate('MainMenu')}>
              <Image source={require('./asset/ic_add_white.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
            </View>
          </View>
          </LinearGradient>
        <View style={{flex:7, backgroundColor:'white', paddingTop:24, paddingLeft:20}}>
          <Text style={{fontSize:18, color:'#4D4D4C', fontFamily:'TitilliumWeb-SemiBold'}}>Knowledge Center</Text>
          <View style={{flexDirection:'row', flex:1}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
    flex: 1,
    backgroundColor:'white'
  },
  Box: {
    flexDirection:'row',
    height: 70,
    width:320,
    marginLeft:20,
    borderRadius:10,
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
    width: 40,
    height: 40,
    borderRadius:20,
    backgroundColor:'#00A99E',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  },
  Header: {
    paddingLeft: 20,
    paddingTop:20,
    paddingRight:20,
    flexDirection:'row'
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
    backgroundColor:'white',
    borderRadius:10
  },
  ImageBox: {
    width:200,
    height:180,
    backgroundColor:'grey',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  }
});
