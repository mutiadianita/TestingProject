import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
}  from 'react-native';

const util = require('util');
export default class ChangePasswordForm extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <View style={{flex:1}}>
        <Text style={styles.Label}>Current Password</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        secureTextEntry
        />
        <Text style={styles.Label}>New Password</Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        secureTextEntry
        />
        <Text style={styles.Label}>Re-type Password</Text>
        <TextInput
        style={styles.TextInput}
        secureTextEntry={true}
        secureTextEntry
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        />
        </View>
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', paddingBottom:40}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('ChangePassword')}>
            <Image source={require('./asset/ic_next_white.png')} style={{width: 46, height: 46}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight:30,
    backgroundColor:'white'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 35,
    fontSize:14,
    fontFamily:'Roboto-Light'
  },
  TextInput: {
    width: 280,
    marginLeft:30,
    color:'#58595B',
    fontWeight:'bold',
    fontSize:16
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
