'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity
}  from 'react-native';

const util = require('util');
export default class Done extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <View style={styles.SubContainer1}>
          <Text style={styles.Title}>You’re Done ! </Text>
          <Text style={styles.Label}>Congratulation! You have successfully completed your initial set up. Now you can start using XDANA.</Text>
        </View>
        <View style={styles.SubContainer2}>
          <TouchableOpacity
          style={styles.Button}
            onPress = {() => navigate('Home')}>
            <Text style={styles.ButtonContent}>></Text>
          </TouchableOpacity>
        </View>
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
    paddingRight:30,
    backgroundColor:'#3393D0'
  },
  SubContainer1: {
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center'
  },
  SubContainer2: {
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end'
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
    marginTop: 30,
    marginLeft: 5,
    marginBottom:30,
    fontFamily: 'Roboto-Light'
  },
  Button: {
    width: 60,
    height: 60,
    borderRadius:30,
    marginBottom:40,
    backgroundColor:'white',
    elevation:5
  },
  ButtonContent: {
    color:'#3393D0',
    fontSize:24,
    fontWeight:'bold',
    marginTop:10,
    marginLeft:25
  }
});
