import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Image
}  from 'react-native';

const util = require('util');
export default class MyBank extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Image source={require('./asset/BCA.png')} style={{marginTop:10,marginBottom:10,marginLeft:60 ,width: 75, height: 25}}/>
        <Text style={styles.Details}>123-123-12345-1 </Text>
        <Text style={styles.Details}>a/n Stanley Santoso</Text>
        <View style={{width: 300, height:1, marginLeft:60, backgroundColor:"rgba(216,216,216,0.60)", marginTop:20, marginBottom:20}}></View>
        <View style={{marginBottom:40,marginTop:20,justifyContent:"center", alignItems:"center"}}>
          <View style={{width:300, marginTop:300}}>
          <Button style={{backgroundColor:"#2775C0", width:300}}
            onPress = {() => navigate("ChangePasswordForm")}
            title="Request to change bank account"
            color= "#086BB3"
            >
          </Button>
          </View>
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
    backgroundColor:'white'
  },
  Details: {
    textAlign: 'left',
    color: '#58595B',
    marginLeft: 65,
    fontSize:16
  }
});
