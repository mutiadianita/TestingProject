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
export default class Success extends Component {
  state = {answer: ''}
   updateAnswer = (answer) => {
      this.setState({ answer: answer })
    }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>You’re Done !
        </Text>
        <Text style={styles.Label}>Congratulation! You have successfully completed your initial set up. Now you can start using XDANA.
        </Text>
        <View style={{flex:1}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 20, marginBottom:30, marginLeft:250, backgroundColor:"white"}}
            onPress = {() => navigate("Home")}>
            <Text style={{color:"#3393D0", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
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
  Title: {
    fontSize: 36,
    fontWeight:'bold',
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
    marginBottom:30
  }
});
