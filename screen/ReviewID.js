import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
}  from 'react-native';

const util = require('util');
export default class ReviewID extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>Please confirm your card and the ID Card number below.</Text>
        <ScrollView>
        <Image source={require('./images/idcard.png')} />
        <Text style={styles.Label}>Your ID Card Number</Text>
        <TextInput
        style={{width: 300, fontSize: 20, color:'black', fontFamily:'Roboto-Medium'}}
        placeholderTextColor='black'
        underlineColorAndroid='black'
        autoFocus={true}
        secureTextEntry={true}
        />
        <Text style={styles.Details}>
        * You can correct your ID Card number
        </Text>
        </ScrollView>
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', marginBottom:40, marginRight:30}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('YourInformation')}>
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
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: '#58595B',
    fontFamily:'Roboto-Light'
  },
  Label: {
    textAlign: 'left',
    color: '#333333',
    marginTop: 30,
    marginLeft: 5,
    fontSize: 14,
    fontFamily:'Roboto-Regular'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 5,
    marginLeft: 5,
    fontSize:10,
    fontFamily:'Roboto-Italic'
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
