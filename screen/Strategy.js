'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Picker
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

        <Text style={styles.title}>Your Investment Strategy
        </Text>
        <Text style={styles.label}>Based on your preferences, you are:
        </Text>
        <View style={{flexDirection: 'row', backgroundColor: "white", paddingTop:20, paddingLeft:15}}>
          <View style={styles.CircleSelected}>
          </View>
          <View style={styles.Circle}>
          </View>
          <View style={styles.Circle}>
          </View>
          <View style={styles.Circle}>
          </View>
          <View style={styles.Circle}>
          </View>
        </View>
        <Text style={styles.Type}>Conservative </Text>
        <Text style={styles.Details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porta mi, ac gravida elit. Nam commodo nisi ex, vitae maximus nisl laoreet in.  </Text>
        <View style={{justifyContent:"flex-end",width: 300, marginTop: 180, marginBottom:20}}>
          <Button
              title= "OK"
              color="#086BB3"
              onPress = {() => navigate("Success")} >
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
  CircleSelected:{
    paddingTop:5,
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#086BB3'
  },
  Circle:{
    paddingTop:5,
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#EEEEEE'
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
