'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
}  from 'react-native';

const util = require('util');
export default class Question2 extends Component {
  state = {answer: ''}
   updateAnswer = (answer) => {
      this.setState({ answer: answer })
    }
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Congrats! You have successfully created an account!
        </Text>
        <View style={{justifyContent:"flex-end",width: 300, marginTop: 50, marginBottom:20}}>
          <Button
              title= "Start using XDANA"
              color="#086BB3"
              onPress = {() => navigate("Home")} >
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 5,
    color: 'black'
  },
  label: {
    textAlign: 'left',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    marginBottom:30
  },
  Type: {
    marginTop: 20,
    fontSize:20,
    fontWeight:'bold',
    color: 'black'
  },
  Details: {
    fontSize:14,
    color:'black'
  }
});
