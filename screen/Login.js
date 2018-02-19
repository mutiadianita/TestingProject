import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet
}  from 'react-native';

const util = require('util');
export default class Login extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Welcome back.
        </Text>
        <Text style={styles.email}>
        EMAIL ADDRESS
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        keyboardType="email-address"
        />
        <Text style={styles.email}>
        PASSWORD
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        secureTextEntry={true}
        />
        <Text style={styles.forgot}>
        Forgot password?
        </Text>
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Login"
                color="#086BB3"
                onPress = {() => navigate("ForgotPassword")}
                >
            </Button>
        </View>
        {/* <Text style={styles.instructions}>
          {instructions}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 30,
    marginLeft: 5,
    marginTop:10,
    color: 'black'
  },
  email: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
  forgot: {
    textAlign: 'right',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
});
