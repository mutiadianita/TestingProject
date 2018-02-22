'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Picker,
  TouchableOpacity
}  from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const util = require('util');
export default class Question5 extends Component {

  render() {

    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
        How much do you know about mutual fund?
        </Text>
        <View style={{alignItems:'flex-start', justifyContent:"flex-start"}}>
        <RadioForm
          radio_props={ [
          {label: 'Do not know at all                                                                             ', value: 1 },
          {label: 'Less knowledge especially about return on investment                  ', value: 2 },
          {label: 'Have good Knowledge (Result and Risk)    ', value: 3 },
          {label: 'Have good knowledge and i have used Mutual Friend                              ', value: 4 },
          {label: 'Really understand about mutual fund and its invesment strategy', value: 5 }
          ]}
          buttonSize={8}
          buttonOuterSize={20}
          initial={0}
          radioStyle={{paddingTop: 20}}
          labelStyle={{fontSize:16}}
          buttonInnerColor={'#3393D0'}
          buttonOuterColor={'#3393D0'}
          onPress={(value) => {this.setState({value:value})}}
        />
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 40, marginBottom:30, marginLeft:240, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("Statement")}>
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
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight:30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    fontWeight:'bold',
    color: '#58595B'
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
