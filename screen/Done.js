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
  ImageBackground,
  Image
}  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const util = require('util');
export default class Done extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <ImageBackground source={require('./asset/bg_success.png')} style={styles.Container}>
          <View style={styles.SubContainer1}>
            <Text style={styles.Title}>You’re Done !</Text>
            <Text style={styles.Label}>Congratulation! You have successfully Created a dream. </Text>
          </View>
          <View style={styles.SubContainer2}>
            <TouchableOpacity
            style={styles.Button}
              onPress = {() => navigate('Home')}>
              <Image source={require('./asset/ic_done.png')} style={{width: 46, height: 46}}/>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight:30
  },
  SubContainer1: {
    flex:8,
    alignItems:'flex-start',
    justifyContent:'flex-end'
  },
  SubContainer2: {
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    paddingBottom:40
  },
  Title: {
    fontSize: 36,
    fontFamily: 'TitilliumWeb-Bold',
    textAlign: 'left',
    marginTop: 300,
    marginBottom: 5,
    marginLeft: 5,
    color: 'white'
  },
  Label: {
    textAlign: 'left',
    fontSize:16,
    color: 'white',
    marginTop: 20,
    marginLeft: 5,
    marginBottom:30,
    fontFamily: 'Roboto-Light'
  },
  Button: {
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:'white',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  },
  ButtonContent: {
    color:'#3393D0',
    fontSize:24,
    fontWeight:'bold',
    marginTop:10,
    marginLeft:25
  }
});
