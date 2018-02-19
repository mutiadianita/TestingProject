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
export default class SignUp_Verify extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Verify your mobile number.
        </Text>
        <Text style={styles.verify}>
        A code has been sent to your mobile number 0811123123. Please enter the code below to verify
        </Text>
        <TextInput
        style={{width: 300, color:"black", fontSize:28, textAlign:"center"}}
        placeholderTextColor="black"
        underlineColorAndroid="black"
        autoFocus={true}
        maxLength={8}
        />
        <View style={{width: 300, marginTop: 20}}>
            <Button
                title= "Verify"
                color="#086BB3"
                onPress = {() => navigate("SignUp_Password")}
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
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    color: 'black'
  },
  verify: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:30
  },
  details: {
    textAlign: 'left',
    color: 'grey',
    marginTop: 5,
    marginLeft: 5,
  },
});
