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
export default class Question3 extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
        What is your investment objective?
        </Text>
        <View style={{alignItems:'flex-start', justifyContent:"flex-start"}}>
        <RadioForm
          radio_props={ [
          {label: 'Investment fund security                               ', value: 1 },
          {label: 'Regular income                                                ', value: 2 },
          {label: 'Invesment Fund Grotwh with low risk          ', value: 3 },
          {label: 'Investment Fund Growth with medium risk', value: 4 },
          {label: 'Invesment Fund Growth with High risk       ', value: 5 }
          ]}
          buttonSize={8}
          buttonOuterSize={20}
          initial={0}
          radioStyle={{paddingTop: 30}}
          labelStyle={{fontSize:16}}
          buttonInnerColor={'#3393D0'}
          buttonOuterColor={'#3393D0'}
          onPress={(value) => {this.setState({value:value})}}
        />
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity
          style={{width: 60, height: 60, borderRadius:30, marginTop: 80, marginBottom:30, marginLeft:240, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("Question4")}>
            <Text style={{color:"white", fontSize:24, fontWeight:"bold", marginTop:10, marginLeft:25}}>></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight:30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    fontWeight:'bold',
    color: '#58595B'
  }
});
