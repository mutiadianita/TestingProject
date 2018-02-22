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
      <View style={styles.container}>

        <Text style={styles.title}>
          Please fill in the data below to Login to your Xdana account.
        </Text>
        <Text style={{fontSize:16, fontWeight:"bold", color:"#3393D0", marginLeft: 30, marginBottom:20}}>Account info
        </Text>
        <Text style={styles.label}>Name
        </Text>
        <TextInput
        style={{width: 280, marginLeft:25, color:"#58595B", fontWeight:"bold", fontSize:16}}
        placeholderTextColor="#58595B"
        underlineColorAndroid="#58595B"
        />
        <Text style={styles.label}>Password
        </Text>
        <TextInput
        style={{width: 280, marginLeft:25, color:"#58595B", fontWeight:"bold", fontSize:16}}
        secureTextEntry={true}
        secureTextEntry
        placeholderTextColor="#58595B"
        underlineColorAndroid="#58595B"
        />
        <View style={{flex:1}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 20, marginLeft:250, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("Home")}>
            <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    color: '#58595B'
  },
  label: {
    textAlign: 'left',
    color: '#58595B',
    marginTop: 10,
    marginLeft: 30,
    fontSize:14
  },
});
