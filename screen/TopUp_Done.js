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
const util = require('util');
export default class TopUp_Done extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <ImageBackground source={{uri: 'bg_success'}} resizeMode="cover" style={styles.Container}>
          <View style={styles.SubContainer1}>
            <Text style={styles.Title}>Success !</Text>
            <Text style={styles.Label}>Congratulation! You have successfully made a one-time top up.</Text>
          </View>
          <View style={styles.SubContainer2}>
            <TouchableOpacity
            style={styles.Button}
              onPress = {() => navigate('Home')}>
              <Image source={{uri: 'ic_done'}} resizeMode="contain" style={{width: Size.BUTTON_ICON, height:Size.BUTTON_ICON}}/>
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
    paddingTop: Size.PADDING_SMALL,
    paddingLeft: Size.PADDING,
    paddingRight:Size.PADDING
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
    paddingBottom:Size.PADDING_LONG
  },
  Title: {
    fontSize: Size.TEXT_TITLEL,
    fontFamily: 'TitilliumWeb-Bold',
    textAlign: 'left',
    marginTop: Size.BUTTON_WIDTH,
    color: 'white'
  },
  Label: {
    textAlign: 'left',
    fontSize:Size.TEXT_LABELS,
    color: 'white',
    marginTop: Size.PADDING_MID,
    marginBottom:Size.PADDING,
    fontFamily: 'Roboto-Light'
  },
  Button: {
    width: Size.BUTTON_ROUND,
    height: Size.BUTTON_ROUND,
    borderRadius:Size.BUTTON_ROUND/2,
    backgroundColor:'white',
    elevation:Size.ELEVATION,
    justifyContent:'center',
    alignItems:'center'
  },
  ButtonContent: {
    color:'#3393D0',
    fontSize:Size.TEXT_TITLEM,
    fontWeight:'bold',
    marginTop:Size.PADDING_SMALL,
    marginLeft:Size.PADDING_TI
  }
});
