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
export default class SignUp_Email extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Enter your personal details.
        </Text>
        <Text style={styles.email}>
        FULL NAME
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        />
        <Text style={styles.email}>
        EMAIL ADDRESS
        </Text>
        <TextInput
        style={{width: 300, color:"black"}}
        secureTextEntry={true}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        keyboardType="email-address"
        />
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Next"
                color="#3498db"
                onPress = {() => navigate("SignUp_Phone")}
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
    marginTop: 10,
    marginLeft: 30,
    marginRight:30,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 30,
    color: 'black'
  },
  email: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
});
