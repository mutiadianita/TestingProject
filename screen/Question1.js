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
export default class Question1 extends Component {

  render() {

    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
        What is your age?
        </Text>
        <View style={{alignItems:'flex-start', justifyContent:"flex-start"}}>
        <RadioForm
          radio_props={ [
          {label: '< 20 years     ', value: 1 },
          {label: '20 - 30 years', value: 2 },
          {label: '30 - 40 years', value: 3 },
          {label: '40 - 50 years', value: 4 },
          {label: '> 50 years     ', value: 5 }
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
          style={{width: 60, height: 60, borderRadius:30, marginTop: 100, marginBottom:30, marginLeft:250, backgroundColor:"#3393D0"}}
            onPress = {() => navigate("Question2")}>
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
    paddingLeft: 30,
    paddingRight:30,
    backgroundColor:'white'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
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
