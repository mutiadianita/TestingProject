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
export default class SignUp_Password extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Create a password.
        </Text>
        <Text style={styles.textpassword}>
        Password must be 8 characters long
        </Text>
        <Text style={styles.password}>
        PASSWORD
        </Text>
        <TextInput
        style={{width: 300, fontSize: 20, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        secureTextEntry={true}
        />
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Next"
                color="#3498db"
                onPress = {() => navigate('SignUp_Password')}
                >
            </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 30,
    marginRight:30,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: 'black'
  },
  textpassword: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:30
  },
  password: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5
  },
});
