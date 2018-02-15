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
export default class SignUp extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Sign Up
        </Text>

        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Continue with Facebook"
                color="#3b5998"
                onPress = {() => navigate("ReviewID")}
                >
            </Button>
        </View>
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Continue with Google"
                color="#db3236"
                onPress = {() => navigate('Google')}
                >
            </Button>
        </View>
        <Text style={styles.or}>
          OR
        </Text>
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Continue with Email"
                color="#3498db"
                onPress = {() => navigate("SignUp_Email")}
                >
            </Button>
        </View>
        <View style={styles.containerlogin}>
          <Text style={styles.login}>
            Already have an account? Login
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: 30,
    marginRight:30,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 30,
    color: 'black'
  },
  or: {
    textAlign: 'center',
    color: 'grey',
    marginTop: 10,
  },
  containerlogin: {
    flex:2,
    justifyContent:'flex-end',
    marginBottom: 30,
  },
  login: {
    textAlign: 'center',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
});
