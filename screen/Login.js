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
export default class Login extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
          Please fill in the data below to Login to your Xdana account.
        </Text>
        <Text style={{fontSize:16,  color:'#3393D0', marginLeft: 30, marginBottom:20, fontFamily:'TitilliumWeb-Bold'}}>Account info
        </Text>
        <Text style={styles.Label}>Name
        </Text>
        <TextInput style={styles.TextInput}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        autoFocus={true}
        />
        <Text style={styles.Label}>Password
        </Text>
        <TextInput style={styles.TextInput}
        secureTextEntry={true}
        secureTextEntry
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        />
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', marginBottom:30}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('HomeStatus')}>
            <Text style={{color:'white', fontSize:24, fontWeight:'bold', marginTop:10, marginLeft:25}}>></Text>
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
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    color: '#58595B',
    fontFamily: 'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 30,
    fontSize:14,
    fontFamily:'Roboto-Light'
  },
  TextInput: {
    width: 280,
    marginLeft:25,
    color:'#58595B',
    fontSize:16,
    fontFamily:'Roboto-Regular'
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    marginTop: 20,
    backgroundColor:'#3393D0',
    elevation:5
  }
});
