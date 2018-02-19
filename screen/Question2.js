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

        <Text style={styles.title}>
        How much do you know about unit trust?
        </Text>
        <Picker selectedValue = {this.state.answer} onValueChange = {this.updateAnswer} >
               <Picker.Item label = "None" value = "1" />
               <Picker.Item label = "A little bit" value = "2" />
               <Picker.Item label = "Understand unit trust" value = "3" />
               <Picker.Item label = "I’m a PRO" value = "4" />
            </Picker>
            <View style={{width: 300, marginTop: 20, marginBottom:20}}>
              <Button
                  title= "Next"
                  color="#086BB3"
                  onPress = {() => navigate("Question3")} >
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
  text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
});
