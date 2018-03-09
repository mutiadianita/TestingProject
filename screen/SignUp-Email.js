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
export default class SignUp_Email extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
          Please fill in the data below to create an Xdana account.
        </Text>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_newprofile_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:'bold', color:'#3393D0', marginTop: 5, marginLeft: 5, marginBottom:20, fontFamily:'TitilliumWeb-Bold'}}>Account
        </Text>
        </View>
        <Text style={styles.Label}>Name
        </Text>
        <TextInput
        style={styles.TextInput}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        autoFocus={true}
        />
        <Text style={styles.Label}>Email
        </Text>
        <TextInput
        style={styles.TextInput}
        secureTextEntry={true}
        placeholderTextColor='#58595B'
        underlineColorAndroid='#58595B'
        keyboardType='email-address'
        />
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', marginBottom:30}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('SignUp_Phone')}>
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
    paddingLeft: 25,
    paddingRight:30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    marginLeft:5,
    color: '#58595B',
    fontFamily: 'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 35,
    fontSize:14,
    fontFamily: 'Roboto-Light'
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    marginTop: 20,
    backgroundColor:'#3393D0',
    elevation:5
  },
  TextInput: {
    width: 280,
    marginLeft:25,
    color:'#58595B',
    fontSize:16,
    fontFamily:'Roboto-Regular'
  }
});
