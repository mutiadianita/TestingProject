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
export default class Login extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>
          Please fill in the data below to Login to your Xdana account.
        </Text>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./asset/ic_profile_blue.png')} style={{width: 32, height:32}}/>
        <Text style={{fontSize:16,  color:'#3393D0', marginLeft: 5, marginTop:5,marginBottom:20, fontFamily:'TitilliumWeb-Bold'}}>Account info
        </Text>
        </View>
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
            onPress = {() => navigate('Home')}>
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
    marginLeft: 35,
    fontSize:14,
    fontFamily:'Roboto-Light'
  },
  TextInput: {
    width: 280,
    marginLeft:30,
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
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
