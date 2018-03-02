import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Picker,
  Image
}  from 'react-native';

const util = require('util');
export default class BankAccount extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Please enter your bank account information</Text>
        <ScrollView>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./asset/ic_more_blue.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginTop: 5, marginLeft: 5, marginBottom:20}}>Your Bank Account</Text>
        </View>
        <Text style={styles.Label}>Account number</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        keyboardType={"numeric"}
        />
        <Text style={styles.Label}>Account Holder</Text>
        <TextInput
        style={{marginLeft:30,width: 280, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        />
    </ScrollView>
    <TouchableOpacity
    style={styles.Button}
      onPress = {() => navigate("Done")}>
      <Text style={styles.ButtonText}>></Text>
    </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
    marginTop:15,
    marginRight: 30,
    color: '#58595B'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 35,
    fontSize:14
  },
  Picker: {
    marginLeft:27,
    width:280
  },
  Button:{
    width: 60,
    height: 60,
    borderRadius:30,
    marginBottom: 20,
    marginLeft:250,
    backgroundColor:"#3393D0"
  },
  ButtonText: {
    color:"white",
    fontSize:24,
    fontWeight:"bold",
    marginTop:10,
    marginLeft:25
  }
});
