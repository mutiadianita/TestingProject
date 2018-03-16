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
          <View style={{flexDirection:'row'}}>
          <Image source={require('./asset/ic_bank.png')} style={{width: 30, height: 30}}/>
          <Text style={{fontSize:16,  color:'#3393D0', marginTop: 5, marginLeft: 5, marginBottom:20, fontFamily:'TitilliumWeb-Bold'}}>Your Bank Account</Text>
          </View>
          <Text style={styles.Label}>Account number</Text>
          <TextInput
          style={{marginLeft:30,width: 280, color:'rgba(0,0,0,0.60)', fontFamily:'Roboto-Regular'}}
          placeholderTextColor='black'
          underlineColorAndroid='black'
          keyboardType={'numeric'}
          />
          <Text style={styles.Label}>Account Holder</Text>
          <TextInput
          style={{marginLeft:30,width: 280, color:'rgba(0,0,0,0.60)', fontFamily:'Roboto-Regular'}}
          placeholderTextColor='black'
          underlineColorAndroid='black'
          />
        </ScrollView>
        <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
          <TouchableOpacity style={styles.RoundButton} onPress = {() => navigate('Done')}>
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
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 35,
    fontSize:14,
    fontFamily:'Roboto-Light'
  },
  Picker: {
    marginLeft:27,
    width:280
  },
  RoundButton:{
    width: 60,
    height: 60,
    borderRadius:30,
    marginBottom: 40,
    marginRight:30,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
