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
export default class SignUp_Password extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
          Please fill in the data below to create an Xdana account.
        </Text>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_newprofile_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Your password
        </Text>
        </View>
        <Text style={styles.Label}>Password
        </Text>
        <TextInput
        style={{width: 280, marginLeft:30, color:"#58595B", fontWeight:"bold", fontSize:16}}
        placeholderTextColor="#58595B"
        underlineColorAndroid="#58595B"
        secureTextEntry
        />
        <Text style={styles.Label}>Re-type Password
        </Text>
        <TextInput
        style={{width: 280, marginLeft:30, color:"#58595B", fontWeight:"bold", fontSize:16}}
        secureTextEntry={true}
        secureTextEntry
        placeholderTextColor="#58595B"
        underlineColorAndroid="#58595B"
        />
        <View style={{flex:1}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 20, marginLeft:250, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("Step1")}>
            <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
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
    color: '#58595B'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 35,
    fontSize:14
  }
});
