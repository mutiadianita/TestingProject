'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
}  from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const util = require('util');
export default class Question1 extends Component {
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>

        <Text style={styles.Title}>
        What is your age?
        </Text>
        <View style={{alignItems:'flex-start', justifyContent:'flex-start', paddingRight:30}}>
        <RadioForm style={{alignItems:'flex-start', justifyContent:'flex-start'}}
          radio_props={ [
          {label: '< 20 years', value: 1 },
          {label: '20 - 30 years', value: 2 },
          {label: '30 - 40 years', value: 3 },
          {label: '40 - 50 years', value: 4 },
          {label: '> 50 years', value: 5 }
          ]}
          buttonSize={8}
          buttonOuterSize={20}
          initial={0}
          radioStyle={{paddingTop: 30}}
          labelStyle={{fontSize:16, fontFamily:'Roboto-Regular', color:'rgba(0,0,0,0.60)'}}
          buttonInnerColor={'#3393D0'}
          buttonOuterColor={'#3393D0'}
          onPress={(value) => {this.setState({value:value})}}
        />
        </View>
        <View style={{flex:1,alignItems:'flex-end', justifyContent:'flex-end',paddingRight:30, paddingBottom:40, backgroundColor:'#FFFFFF'}}>
          <TouchableOpacity
          style={styles.RoundButton}
            onPress = {() => navigate('Question2')}>
            <Image source={require('./asset/ic_next_white.png')} style={{width: 46, height: 46}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 30,
    backgroundColor:'white'
  },
  Title: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    fontWeight:'bold',
    color: '#58595B',
    fontFamily:'Roboto-Bold',
    marginRight:30
  },
  RoundButton: {
    width: 60,
    height: 60,
    borderRadius:30,
    backgroundColor:'#3393D0',
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
